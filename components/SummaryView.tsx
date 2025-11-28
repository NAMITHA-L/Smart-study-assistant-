
import React from 'react';
import { StudyGuideData } from '../types';
import { Quote, Sigma, Calculator, FileText } from 'lucide-react';

interface SummaryViewProps {
  data: StudyGuideData;
}

export const SummaryView: React.FC<SummaryViewProps> = ({ data }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Metadata Badge */}
      <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-2">
        {data.metadata.source_files.length > 0 && (
          <span className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200 flex items-center">
            <FileText className="w-3 h-3 mr-1.5" />
            {data.metadata.source_files.length} Source File(s)
          </span>
        )}
        <span className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
           {data.metadata.num_chunks} Processing Chunks
        </span>
      </div>

      {/* Summary Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex items-center">
          <Quote className="w-5 h-5 text-indigo-600 mr-3" />
          <h2 className="text-lg font-semibold text-indigo-900">Executive Summary</h2>
        </div>
        <div className="p-6 sm:p-8">
          <div className="prose prose-slate max-w-none leading-relaxed text-slate-700">
            {data.summary_1_page.split('\n').map((paragraph, index) => (
               paragraph.trim() && <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Formulas Section */}
      {data.formulas_and_definitions && data.formulas_and_definitions.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center">
            <Sigma className="w-5 h-5 text-indigo-600 mr-3" />
            <h2 className="text-lg font-semibold text-slate-900">Formulas & Definitions</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {data.formulas_and_definitions.map((item, index) => (
              <div key={index} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <div className="sm:w-1/3 shrink-0">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider mb-1 px-2 py-0.5 rounded 
                      ${item.type === 'formula' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'}`}>
                      {item.type}
                    </span>
                    <p className="font-bold text-slate-900 mt-1 font-mono text-sm sm:text-base">
                      {item.content}
                    </p>
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed flex items-center">
                    {item.notes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Worked Examples Section */}
      {data.worked_examples && data.worked_examples.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center">
            <Calculator className="w-5 h-5 text-indigo-600 mr-3" />
            <h2 className="text-lg font-semibold text-slate-900">Worked Examples</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {data.worked_examples.map((example, index) => (
              <div key={index} className="p-6 sm:p-8">
                <h3 className="text-md font-bold text-slate-900 mb-2">{example.title}</h3>
                <div className="bg-slate-50 rounded-lg p-4 mb-4 text-slate-800 italic text-sm border border-slate-100">
                  {example.problem}
                </div>
                <div className="pl-4 border-l-2 border-indigo-200">
                  <p className="text-xs font-bold text-indigo-600 uppercase mb-2">Solution</p>
                  <div className="prose prose-sm prose-indigo text-slate-600">
                    {example.stepwise_solution.split('\n').map((step, i) => (
                       <p key={i} className="mb-1">{step}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
