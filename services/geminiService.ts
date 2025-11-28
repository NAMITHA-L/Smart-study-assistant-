
import { GoogleGenAI, Schema, Type } from "@google/genai";
import { StudyGuideData } from "../types";

// Define the schema for the structured output based on the user's requirements
const studyGuideSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    metadata: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        num_pages: { type: Type.INTEGER, nullable: true },
        num_chunks: { type: Type.INTEGER },
        source_files: { type: Type.ARRAY, items: { type: Type.STRING } },
        assumptions: { type: Type.STRING },
      },
      required: ["title", "num_chunks", "source_files"],
    },
    summary_1_page: {
      type: Type.STRING,
      description: "A comprehensive 1-page summary (350-450 words).",
    },
    mcqs: {
      type: Type.ARRAY,
      description: "Exactly 10 MCQs.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.INTEGER },
          topic: { type: Type.STRING },
          difficulty: { type: Type.STRING, enum: ["easy", "medium", "hard"] },
          question: { type: Type.STRING },
          options: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "4 options, typically prefixed with A), B), etc.",
          },
          correct_option_index: { type: Type.INTEGER },
          explanation: { type: Type.STRING },
        },
        required: ["id", "question", "options", "correct_option_index", "explanation", "difficulty"],
      },
    },
    short_answers: {
      type: Type.ARRAY,
      description: "Exactly 5 Short Answer Questions.",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.INTEGER },
          question: { type: Type.STRING },
          model_answer: { type: Type.STRING, description: "2-4 sentence model answer." },
        },
        required: ["id", "question", "model_answer"],
      },
    },
    formulas_and_definitions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          type: { type: Type.STRING, enum: ["formula", "definition"] },
          content: { type: Type.STRING },
          notes: { type: Type.STRING },
        },
        required: ["type", "content", "notes"],
      },
    },
    worked_examples: {
      type: Type.ARRAY,
      description: "2 worked examples if available.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          problem: { type: Type.STRING },
          stepwise_solution: { type: Type.STRING },
        },
        required: ["title", "problem", "stepwise_solution"],
      },
    },
    chunk_summaries: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          chunk_index: { type: Type.INTEGER },
          source: { type: Type.STRING },
          page_or_slide: { type: Type.INTEGER, nullable: true },
          summary: { type: Type.STRING },
        },
        required: ["chunk_index", "source", "summary"],
      },
    },
  },
  required: ["metadata", "summary_1_page", "mcqs", "short_answers", "formulas_and_definitions", "worked_examples", "chunk_summaries"],
};

const SYSTEM_INSTRUCTION = `
You are a Study Assistant Agent. Your job begins only after the user uploads one or more files.

Your responsibilities:

A) Supported Inputs:
   - PDF, DOCX, DOC, PPTX, PPT, TXT, Images (JPG, PNG)
   - Multiple files at once

B) Follow this pipeline:

1. EXTRACT CONTENT
   • Read every file entirely.
   • For images: run OCR implicitly.
   • Preserve file order.

2. CHUNKING:
   • Mentally split the content into logical chunks (~900–1200 tokens each).
   • For each chunk, generate a "chunk_summary".

3. FINAL SYNTHESIS:
   Produce the following outputs:
   • One-page summary (350–450 words)
   • Exactly 10 MCQs with:
       - question, 4 options, correct_option_index, explanation, difficulty
   • Exactly 5 Short Answer Questions with 2–4 sentence model answers
   • List of important formulas and definitions
   • Extract 2 worked examples with short stepwise solutions if available
   • Include the chunk summaries at the end

4. RULES:
   • Do NOT hallucinate; if unsure, note it in metadata.assumptions.
   • Only return JSON.
   • If files are corrupted or unreadable, output JSON with metadata.error (though schema enforcement might prevent this, try to return valid empty structures with notes).
`;

export interface FileInput {
  name: string;
  mimeType: string;
  data: string; // Base64 string
}

export const generateStudyGuide = async (
  files: FileInput[], 
  userInstructions?: string,
  title?: string
): Promise<StudyGuideData> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Construct the content parts
    const parts: any[] = [];

    // Add files
    for (const file of files) {
      parts.push({
        inlineData: {
          mimeType: file.mimeType,
          data: file.data,
        },
      });
    }

    // Add text prompt
    let promptText = "Analyze these files and generate the study guide JSON.";
    if (title) promptText += `\nTitle Context: ${title}`;
    if (userInstructions) promptText += `\nStudy Focus/Notes: ${userInstructions}`;
    
    parts.push({ text: promptText });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ parts }],
      config: {
        responseMimeType: "application/json",
        responseSchema: studyGuideSchema,
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const textResponse = response.text;
    if (!textResponse) {
      throw new Error("No response received from AI.");
    }

    const data = JSON.parse(textResponse) as StudyGuideData;
    return data;
  } catch (error) {
    console.error("Error generating study guide:", error);
    throw error;
  }
};
