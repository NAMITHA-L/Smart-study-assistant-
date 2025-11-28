
import React, { useState } from 'react';
import { StudyGuideData } from '../types';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RefreshCw, BarChart3 } from 'lucide-react';

interface QuizViewProps {
  data: StudyGuideData;
}

export const QuizView: React.FC<QuizViewProps> = ({ data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = data.mcqs[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === data.mcqs.length - 1;

  const handleOptionSelect = (index: number) => {
    if (isAnswerRevealed) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerRevealed(true);
    if (selectedOption === currentQuestion.correct_option_index) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / data.mcqs.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-10 text-center animate-fade-in">
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Quiz Completed!</h2>
        <p className="text-slate-600 mb-8">You scored</p>
        
        <div className="text-6xl font-black text-indigo-600 mb-4">
          {percentage}%
        </div>
        <p className="text-slate-500 mb-8">
          {score} out of {data.mcqs.length} correct
        </p>

        <button
          onClick={resetQuiz}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Progress Bar */}
      <div className="flex items-center justify-between text-sm font-medium text-slate-500 mb-2">
        <span>Question {currentQuestionIndex + 1} of {data.mcqs.length}</span>
        <span>Score: {score}</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${((currentQuestionIndex + 1) / data.mcqs.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase
              ${currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800' : 
                currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}
            `}>
              {currentQuestion.difficulty}
            </span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              {currentQuestion.topic}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              let cardClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 relative flex items-center ";
              
              if (isAnswerRevealed) {
                if (idx === currentQuestion.correct_option_index) {
                  cardClass += "border-green-500 bg-green-50 text-green-900";
                } else if (idx === selectedOption) {
                  cardClass += "border-red-500 bg-red-50 text-red-900";
                } else {
                  cardClass += "border-slate-100 text-slate-400 opacity-50";
                }
              } else {
                if (selectedOption === idx) {
                  cardClass += "border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-200";
                } else {
                  cardClass += "border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isAnswerRevealed}
                  className={cardClass}
                >
                  <span className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 shrink-0 border
                    ${isAnswerRevealed && idx === currentQuestion.correct_option_index ? 'bg-green-500 border-green-500 text-white' : 
                      isAnswerRevealed && idx === selectedOption ? 'bg-red-500 border-red-500 text-white' :
                      selectedOption === idx ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-500'}
                  `}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-medium">{option}</span>
                  
                  {isAnswerRevealed && idx === currentQuestion.correct_option_index && (
                    <CheckCircle2 className="absolute right-4 w-6 h-6 text-green-600" />
                  )}
                  {isAnswerRevealed && idx === selectedOption && idx !== currentQuestion.correct_option_index && (
                    <XCircle className="absolute right-4 w-6 h-6 text-red-600" />
                  )}
                </button>
              );
            })}
          </div>

          {isAnswerRevealed && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-900 animate-fade-in">
              <div className="flex items-start">
                <HelpCircle className="w-5 h-5 text-blue-600 mr-2 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wide mb-1 text-blue-700">Explanation</p>
                  <p className="text-blue-800">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          {!isAnswerRevealed ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedOption === null}
              className="inline-flex items-center px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="inline-flex items-center px-6 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isLastQuestion ? "Finish Quiz" : "Next Question"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
