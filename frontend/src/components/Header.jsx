import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ThemeToggle from './ThemeToggle';
import { ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon, PencilSquareIcon, PlusCircleIcon, QueueListIcon } from '@heroicons/react/24/outline';


const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-slate-800 dark:text-white">Quiz</span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Rush
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link to="/quizzes" className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <QueueListIcon className="w-5 h-5"/>
              Browse Quizzes
            </Link>
            
            {/* These links only appear if the user is logged in */}
            {user && (
              <>
                <Link to="/my-quizzes" className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <PencilSquareIcon className="w-5 h-5" />
                  My Quizzes
                </Link>
                <Link to="/quiz/create" className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                   <PlusCircleIcon className="w-5 h-5" />
                   Create Quiz
                </Link>
              </>
            )}
          </nav>
          
          <ThemeToggle />
          
          {user ? (
            <button 
              onClick={handleLogout} 
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-transform hover:scale-105"
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5" />
              <span>Logout</span>
            </button>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center gap-2 font-bold text-sm py-2 px-5 rounded-lg border-2 
                         text-purple-600 border-purple-600 
                         dark:text-purple-400 dark:border-purple-400 
                         transition-all duration-300 ease-in-out
                         hover:bg-purple-600 hover:text-white 
                         dark:hover:bg-purple-400 dark:hover:text-slate-900
                         hover:shadow-lg hover:shadow-purple-600/20
                         dark:hover:shadow-purple-400/20
                         hover:-translate-y-px"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span>Login / Register</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;