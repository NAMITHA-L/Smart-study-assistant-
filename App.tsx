
import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { SummaryView } from './components/SummaryView';
import { QuizView } from './components/QuizView';
import { ShortAnswerView } from './components/ShortAnswerView';
import { generateStudyGuide, FileInput } from './services/geminiService';
import { LoadingState, StudyGuideData, StudyTab } from './types';
import { Book, ListChecks, HelpCircle, Code, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [data, setData] = useState<StudyGuideData | null>(null);
  const [activeTab, setActiveTab] = useState<StudyTab>('summary');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGenerate = async (files: FileInput[], instructions: string, title: string) => {
    setStatus(LoadingState.LOADING);
    setErrorMsg(null);
    try {
      const result = await generateStudyGuide(files, instructions, title);
      setData(result);
      setStatus(LoadingState.SUCCESS);
      setActiveTab('summary');
    } catch (err: any) {
      setStatus(LoadingState.ERROR);
      setErrorMsg(err.message || "Failed to generate study guide. Please try again.");
    }
  };

  const handleReset = () => {
    setStatus(LoadingState.IDLE);
    setData(null);
    setErrorMsg(null);
  };

  const renderContent = () => {
    if (!data) return null;

    switch (activeTab) {
      case 'summary':
        return <SummaryView data={data} />;
      case 'quiz':
        return <QuizView data={data} />;
      case 'qa':
        return <ShortAnswerView data={data} />;
      case 'json':
        return (
           <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto shadow-inner">
             <pre className="text-xs sm:text-sm text-emerald-400 font-mono">
               {JSON.stringify(data, null, 2)}
             </pre>
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        {status === LoadingState.IDLE || status === LoadingState.LOADING || status === LoadingState.ERROR ? (
          <div className="container mx-auto px-4">
             {status === LoadingState.ERROR && errorMsg && (
               <div className="max-w-3xl mx-auto mt-8 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 flex items-center justify-center">
                 <span className="font-medium">{errorMsg}</span>
               </div>
             )}
             {/* Hide form when loading to prevent interaction, or just disable it via props (InputForm handles that) */}
             <InputForm onSubmit={handleGenerate} isLoading={status === LoadingState.LOADING} />
          </div>
        ) : (
          <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <button 
                  onClick={handleReset}
                  className="text-sm text-slate-500 hover:text-indigo-600 flex items-center mb-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Analyze new files
                </button>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  {data?.metadata?.title || "Study Guide"}
                </h2>
                {data?.metadata?.assumptions && (
                  <p className="text-sm text-slate-500 mt-1 italic">Note: {data.metadata.assumptions}</p>
                )}
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-white border border-slate-200 rounded-xl shadow-sm w-full md:w-auto inline-flex">
              {[
                { id: 'summary', label: 'Summary & Notes', icon: Book },
                { id: 'quiz', label: 'Quiz Mode', icon: ListChecks },
                { id: 'qa', label: 'Short Answers', icon: HelpCircle },
                { id: 'json', label: 'Raw JSON', icon: Code },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as StudyTab)}
                  className={`
                    flex-1 md:flex-none flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all
                    ${activeTab === tab.id 
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                  `}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[500px]">
              {renderContent()}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Study Assistant. Learn stressfree.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
