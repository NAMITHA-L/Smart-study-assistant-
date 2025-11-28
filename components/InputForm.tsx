
import React, { useState, useCallback } from 'react';
import { Sparkles, UploadCloud, File, X, AlertCircle, BookOpen, FileType } from 'lucide-react';
import { FileInput } from '../services/geminiService';

interface InputFormProps {
  onSubmit: (files: FileInput[], instructions: string, title: string) => void;
  isLoading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [files, setFiles] = useState<FileInput[]>([]);
  const [instructions, setInstructions] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await processFiles(Array.from(e.target.files));
    }
  };

  const processFiles = async (fileList: File[]) => {
    setError('');
    const newFiles: FileInput[] = [];

    for (const file of fileList) {
      // Basic validation
      if (file.size > 10 * 1024 * 1024) { // 10MB limit per file for safety
        setError(`File ${file.name} is too large (max 10MB).`);
        continue;
      }

      try {
        const base64Data = await fileToBase64(file);
        // Remove Data URI prefix (e.g. "data:application/pdf;base64,")
        const base64Content = base64Data.split(',')[1];
        
        newFiles.push({
          name: file.name,
          mimeType: file.type || 'text/plain', // Fallback
          data: base64Content
        });
      } catch (err) {
        console.error("Error reading file", err);
        setError(`Failed to read file ${file.name}`);
      }
    }

    setFiles(prev => [...prev, ...newFiles]);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await processFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      setError('Please upload at least one file.');
      return;
    }
    setError('');
    onSubmit(files, instructions, title);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
          Your Personal Study Agent
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Upload your textbooks, notes, or slides (PDF, Images, Text). 
          Our Agent extracts the content and builds a complete study system for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* File Upload Zone */}
        <div 
          className={`
            relative border-2 border-dashed rounded-2xl p-8 transition-all duration-200 ease-in-out flex flex-col items-center justify-center
            ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 bg-white hover:border-indigo-400 hover:bg-slate-50'}
          `}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <div className="bg-indigo-100 p-4 rounded-full mb-4">
            <UploadCloud className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-1">
            Click to upload or drag and drop
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            PDF, Text, JPG, PNG (Max 10MB per file)
          </p>
          
          <input 
            type="file" 
            id="file-upload"
            multiple
            accept=".pdf,.txt,.jpg,.jpeg,.png,.webp,.heic" 
            className="hidden"
            onChange={handleFileChange}
            disabled={isLoading}
          />
          <label 
            htmlFor="file-upload"
            className={`
              px-6 py-2.5 rounded-full font-semibold text-sm shadow-sm cursor-pointer transition-colors
              ${isLoading ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white text-indigo-600 border border-slate-200 hover:bg-indigo-50'}
            `}
          >
            Select Files
          </label>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
            <div className="bg-slate-50 px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              Uploaded Files ({files.length})
            </div>
            {files.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    {file.mimeType.includes('image') ? <FileType className="w-5 h-5 text-indigo-600" /> : <File className="w-5 h-5 text-indigo-600" />}
                  </div>
                  <span className="text-sm font-medium text-slate-700 truncate max-w-[200px] sm:max-w-xs">
                    {file.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(idx)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  disabled={isLoading}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Optional Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
             <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Title (Optional)</label>
             <input
               type="text"
               id="title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder="e.g. Biology Chapter 4"
               className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5"
               disabled={isLoading}
             />
          </div>
          <div>
             <label htmlFor="focus" className="block text-sm font-medium text-slate-700 mb-1">Study Focus (Optional)</label>
             <input
               type="text"
               id="focus"
               value={instructions}
               onChange={(e) => setInstructions(e.target.value)}
               placeholder="e.g. focus on exam definitions"
               className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5"
               disabled={isLoading}
             />
          </div>
        </div>

        {error && (
          <div className="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
            <AlertCircle className="flex-shrink-0 inline w-4 h-4 me-3" />
            <span className="font-medium">{error}</span>
          </div>
        )}

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isLoading || files.length === 0}
            className={`
              flex items-center justify-center w-full sm:w-auto px-10 py-4 text-base font-bold text-white transition-all rounded-xl shadow-lg hover:shadow-xl
              ${isLoading || files.length === 0 
                ? 'bg-slate-300 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 shadow-indigo-200'}
            `}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Files...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Study Guide
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
