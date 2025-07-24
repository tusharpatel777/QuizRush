import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance'; // UPDATED
import { useAuth } from '../hooks/useAuth';
import QuizCard from '../components/QuizCard';
import { Link } from 'react-router-dom';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchQuizzes = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get('/api/quizzes'); // UPDATED
        setQuizzes(data);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  const handleQuizDeleted = (deletedQuizId) => {
    setQuizzes(prevQuizzes => prevQuizzes.filter(quiz => quiz._id !== deletedQuizId));
  };

  if (loading) return <div className="text-center mt-10 text-xl text-slate-800 dark:text-white">Loading quizzes...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-slate-800 dark:text-white">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Available</span> Quizzes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.length > 0 ? (
          quizzes.map(quiz => (
            <QuizCard 
              key={quiz._id} 
              quiz={quiz} 
              onQuizDeleted={handleQuizDeleted}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-16 bg-white dark:bg-slate-800/50 rounded-xl">
             <p className="text-slate-500 dark:text-gray-400">No quizzes available yet.</p>
             <Link to="/quiz/create" className="mt-4 inline-block text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                Be the first to create one!
             </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizList;

