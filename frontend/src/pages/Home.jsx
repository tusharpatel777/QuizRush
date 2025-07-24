
import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';

const Home = () => {
  const { theme } = useTheme(); // Get the current theme to conditionally render layouts

  return (
    <div className="relative isolate text-center overflow-hidden -mt-16 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
      
      {/* Sparkles will only be visible in dark mode */}
      <div className="hidden dark:block">
        <SparklesIcon className="w-10 h-10 text-purple-400 absolute top-20 left-1/4 opacity-50 animate-pulse" />
        <SparklesIcon className="w-6 h-6 text-pink-400 absolute top-1/3 right-1/4 opacity-50 animate-pulse delay-700" />
        <SparklesIcon className="w-8 h-8 text-indigo-400 absolute bottom-20 left-1/3 opacity-50 animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex justify-center">
          <p className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-white/20">
          Fuel your brain. Feel the rush. Welcome to QuizRush!
          </p>
        </div>

        {/* The Main "AI" Title */}
        <span className="text-8xl font-bold text-slate-800 dark:text-white">Quiz</span>
          <span className=" text-8xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Rush
          </span>
        {/* <h1 className="text-8xl font-bold tracking-tight sm:text-9xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Quizzly
        </h1> */}
        
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create, share, and challenge your knowledge with our quiz platform.
        </p>

        {/* Conditional Layout for the Action Buttons */}
        <div className="mt-16">
          {theme === 'light' ? (
            // --- LIGHT MODE LAYOUT --- (No Card)
            <div className="w-full max-w-md mx-auto p-4 bg-slate-100 rounded-xl">
                <div className="flex flex-col sm:flex-row gap-2">
                    <Link 
                        to="/quiz/create" 
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
                    >
                        Create a New Quiz
                    </Link>
                    <Link 
                        to="/quizzes" 
                        className="flex-1 bg-white hover:bg-slate-50 text-slate-700 font-bold py-3 px-6 rounded-lg border border-slate-300"
                    >
                        Browse Quizzes
                    </Link>
                </div>
            </div>
          ) : (
            // --- DARK MODE LAYOUT --- (Glass Card)
            <div className="w-full max-w-2xl mx-auto bg-gray-900/50 border border-white/10 rounded-xl p-8 shadow-2xl shadow-purple-500/10 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white mb-6">What do you want to do today?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link 
                        to="/quiz/create" 
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
                    >
                        Create a New Quiz
                    </Link>
                    <Link 
                        to="/quizzes" 
                        className="flex-1 bg-transparent hover:bg-white/10 border-2 border-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
                    >
                        Browse Quizzes
                    </Link>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;