import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance'; // UPDATED
import { useAuth } from '../hooks/useAuth';
import QuizCard from '../components/QuizCard';
import { Link } from 'react-router-dom';

const MyQuizzes = () => {
  const [myQuizzes, setMyQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!user) return;

      setLoading(true);
      try {
        const { data } = await axiosInstance.get('/api/quizzes'); // UPDATED
        const filteredQuizzes = data.filter(quiz => quiz.creator && quiz.creator._id === user.id);
        setMyQuizzes(filteredQuizzes);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [user]);

  const handleQuizDeleted = (deletedQuizId) => {
    setMyQuizzes(prevQuizzes => prevQuizzes.filter(quiz => quiz._id !== deletedQuizId));
  };

  if (loading) return <div className="text-center mt-10 text-xl text-slate-800 dark:text-white">Loading your quizzes...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">My</span> Quizzes
        </h1>
        <Link to="/quiz/create" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg transition-transform hover:scale-105">
          Create New Quiz
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myQuizzes.length > 0 ? (
          myQuizzes.map(quiz => (
            <QuizCard 
              key={quiz._id} 
              quiz={quiz} 
              onQuizDeleted={handleQuizDeleted}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-16 bg-white dark:bg-slate-800/50 rounded-xl">
            <p className="text-slate-500 dark:text-gray-400">You haven't created any quizzes yet.</p>
            <Link to="/quiz/create" className="mt-4 inline-block text-purple-600 dark:text-purple-400 font-semibold hover:underline">
              Create one now!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyQuizzes;