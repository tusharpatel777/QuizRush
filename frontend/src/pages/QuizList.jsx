// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import QuizCard from '../components/QuizCard';

// const API_URL = 'http://localhost:5000/api/quizzes/';

// const QuizList = () => {
//   const [quizzes, setQuizzes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setQuizzes(response.data);
//       } catch (error) {
//         console.error("Failed to fetch quizzes:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQuizzes();
//   }, []);

//   if (loading) return <div className="text-center mt-10">Loading quizzes...</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">Available Quizzes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {quizzes.map(quiz => (
//           <QuizCard key={quiz._id} quiz={quiz} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuizList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizCard from '../components/QuizCard';

const API_URL = 'http://localhost:5000/api/quizzes/';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(API_URL);
        setQuizzes(response.data);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl text-white">Loading quizzes...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-center text-white">
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Available</span> Quizzes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.length > 0 ? (
          quizzes.map(quiz => (
            <QuizCard key={quiz._id} quiz={quiz} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">No quizzes available yet. Why not create one?</p>
        )}
      </div>
    </div>
  );
};

export default QuizList;