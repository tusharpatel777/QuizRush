import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance'; // Using the centralized axios instance
import { useAuth } from '../hooks/useAuth';
import { 
    UserCircleIcon, 
    QuestionMarkCircleIcon, 
    PencilSquareIcon, 
    TrashIcon 
} from '@heroicons/react/24/outline';

const QuizCard = ({ quiz, onQuizDeleted }) => {
  const { user, token } = useAuth();
  const navigate = useNavigate();

  // Self-determines if the current logged-in user is the owner
  const isOwner = user && quiz.creator && user.id === quiz.creator._id;

  const handleDelete = async (e) => {
    // Prevent the parent link from navigating
    e.stopPropagation();
    e.preventDefault();

    if (window.confirm('Are you sure you want to delete this quiz? This action cannot be undone.')) {
      try {
        await axiosInstance.delete(`/api/quizzes/${quiz._id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (onQuizDeleted) {
          onQuizDeleted(quiz._id); // Notify parent component to update UI
        }
      } catch (error) {
        console.error('Failed to delete quiz', error);
        alert('Failed to delete quiz. Please try again.');
      }
    }
  };
  
  const handleEdit = (e) => {
    // Prevent the parent link from navigating
    e.stopPropagation();
    e.preventDefault();
    navigate(`/quiz/edit/${quiz._id}`);
  }

  return (
    <Link 
      to={`/quiz/${quiz._id}`}
      className="relative flex flex-col bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-md dark:shadow-2xl dark:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 dark:hover:border-purple-400/50 backdrop-blur-sm group"
    >
      {/* Owner Controls - Appears at the top right on hover */}
      {isOwner && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleEdit}
            title="Edit Quiz"
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-500/50 hover:text-purple-600 dark:hover:text-white transition-colors"
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            onClick={handleDelete}
            title="Delete Quiz"
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-500/50 hover:text-red-600 dark:hover:text-white transition-colors"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold tracking-tight mb-2 text-slate-800 dark:text-white">
          {quiz.title}
        </h3>
        
        <div className="flex items-center text-sm text-slate-500 dark:text-gray-400 mb-4">
          <UserCircleIcon className="w-5 h-5 mr-2" />
          <span>Created by: {quiz.creator?.name || 'Unknown'}</span>
        </div>

        <p 
          className="text-slate-600 dark:text-gray-300 h-16 relative overflow-hidden text-sm leading-relaxed"
          style={{ maskImage: 'linear-gradient(to bottom, white 60%, transparent 100%)' }}
        >
          {quiz.description || "No description provided."}
        </p>
      </div>

      {/* Card Footer */}
      <div className="border-t border-gray-200 dark:border-white/10 p-4 flex justify-between items-center bg-gray-50/50 dark:bg-black/10 rounded-b-xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300 py-1 px-3 rounded-full">
            <QuestionMarkCircleIcon className="w-4 h-4" />
            <span>{quiz.questions.length} Questions</span>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-0.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-shadow">
           <div className="bg-white dark:bg-slate-800 rounded-md px-4 py-1.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Take Quiz</span>
           </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;