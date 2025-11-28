
import React, { useState } from 'react';
import { StudyGuideData } from '../types';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface ShortAnswerViewProps {
  data: StudyGuideData;
}

export const ShortAnswerView: React.FC<ShortAnswerViewProps> = ({ data }) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set());

  const toggleAnswer = (id: number) => {
    const newRevealed = new Set(revealedAnswers);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealedAnswers(newRevealed);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-indigo-900 text-white rounded-2xl p-6 shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-2">Short Answer Questions</h2>
        <p className="text-indigo-200">Test your deep understanding. Try to answer mentally before revealing the model answer.</p>
      </div>

      <div className="grid gap-6">
        {data.short_answers.map((item) => {
          const isRevealed = revealedAnswers.has(item.id);
          
          return (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button 
                onClick={() => toggleAnswer(item.id)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0 mt-0.5">
                      {item.id}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 pt-0.5">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`
                    ml-4 p-2 rounded-full transition-colors shrink-0
                    ${isRevealed ? 'bg-slate-100 text-slate-600' : 'bg-indigo-50 text-indigo-600'}
                  `}>
                    {isRevealed ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>
              
              {isRevealed && (
                <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 md:pl-20 animate-fade-in">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 text-emerald-600">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Model Answer</p>
                      <p className="text-slate-700 leading-relaxed">
                        {item.model_answer}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
