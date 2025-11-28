
export interface FormulaDefinition {
  type: string;
  content: string;
  notes: string;
}

export interface MCQ {
  id: number;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correct_option_index: number;
  explanation: string;
}

export interface ShortAnswer {
  id: number;
  question: string;
  model_answer: string;
}

export interface WorkedExample {
  title: string;
  problem: string;
  stepwise_solution: string;
}

export interface ChunkSummary {
  chunk_index: number;
  source: string;
  page_or_slide: number | null;
  summary: string;
}

export interface StudyGuideMetadata {
  title: string;
  num_pages: number | null;
  num_chunks: number;
  source_files: string[];
  assumptions: string;
}

export interface StudyGuideData {
  metadata: StudyGuideMetadata;
  summary_1_page: string;
  mcqs: MCQ[];
  short_answers: ShortAnswer[];
  formulas_and_definitions: FormulaDefinition[];
  worked_examples: WorkedExample[];
  chunk_summaries: ChunkSummary[];
}

export type StudyTab = 'input' | 'summary' | 'quiz' | 'qa' | 'json';

export enum LoadingState {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}
