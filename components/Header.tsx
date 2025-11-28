import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Smart Study <span className="text-indigo-600">Assistant</span>
          </h1>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">Powered by Gemini 2.5 Flash</span>
        </div>
      </div>
    </header>
  );
};