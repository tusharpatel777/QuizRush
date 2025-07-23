// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import axios from 'axios';

// // // const API_URL = 'http://localhost:5000/api/quizzes/';

// // // const TakeQuiz = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [quiz, setQuiz] = useState(null);
// // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // //   const [answers, setAnswers] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const fetchQuiz = async () => {
// // //       try {
// // //         const { data } = await axios.get(`${API_URL}${id}`);
// // //         setQuiz(data);
// // //         setAnswers(new Array(data.questions.length).fill(null));
// // //       } catch (error) {
// // //         console.error('Failed to fetch quiz', error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchQuiz();
// // //   }, [id]);

// // //   const handleAnswerSelect = (optionIndex) => {
// // //     const newAnswers = [...answers];
// // //     newAnswers[currentQuestionIndex] = optionIndex;
// // //     setAnswers(newAnswers);
// // //   };

// // //   const handleNext = () => {
// // //     if (currentQuestionIndex < quiz.questions.length - 1) {
// // //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// // //     }
// // //   };

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const { data } = await axios.post(`${API_URL}${id}/submit`, { answers });
// // //       // Pass results state to the results page
// // //       navigate(`/quiz/${id}/results`, { state: { results: data, quizTitle: quiz.title } });
// // //     } catch (error) {
// // //       console.error('Failed to submit quiz', error);
// // //     }
// // //   };

// // //   if (loading) return <div>Loading Quiz...</div>;
// // //   if (!quiz) return <div>Quiz not found.</div>;

// // //   const currentQuestion = quiz.questions[currentQuestionIndex];
// // //   const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

// // //   return (
// // //     <div className="max-w-2xl mx-auto mt-10 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
// // //       <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
// // //       <p className="text-gray-600 dark:text-gray-400 mb-6">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
      
// // //       <div className="mb-6">
// // //         <h2 className="text-2xl font-semibold mb-4">{currentQuestion.questionText}</h2>
// // //         <div className="space-y-3">
// // //           {currentQuestion.options.map((option, index) => (
// // //             <button
// // //               key={index}
// // //               onClick={() => handleAnswerSelect(index)}
// // //               className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${answers[currentQuestionIndex] === index ? 'bg-indigo-100 dark:bg-indigo-900 border-indigo-500' : 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
// // //             >
// // //               {option}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>
      
// // //       <div className="flex justify-end">
// // //         {isLastQuestion ? (
// // //           <button
// // //             onClick={handleSubmit}
// // //             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
// // //             disabled={answers[currentQuestionIndex] === null}
// // //           >
// // //             Submit Quiz
// // //           </button>
// // //         ) : (
// // //           <button
// // //             onClick={handleNext}
// // //             className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded"
// // //             disabled={answers[currentQuestionIndex] === null}
// // //           >
// // //             Next
// // //           </button>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TakeQuiz;

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const QuizCard = ({ quiz }) => {
// //   return (
// //     <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm">
// //       <h3 className="text-xl font-bold mb-2 text-white">{quiz.title}</h3>
// //       <p className="text-sm text-gray-400 mb-2">Created by: {quiz.creator?.name || 'Unknown'}</p>
// //       <p className="text-gray-300 mb-4 h-12 overflow-hidden">{quiz.description}</p>
// //       <div className="flex justify-between items-center mt-4">
// //         <span className="text-xs font-semibold uppercase tracking-wider bg-white/10 text-gray-300 py-1 px-3 rounded-full">{quiz.questions.length} Questions</span>
// //         <Link 
// //           to={`/quiz/${quiz._id}`}
// //           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-transform hover:scale-105"
// //         >
// //           Take Quiz
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuizCard;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/quizzes/';

// const TakeQuiz = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [quiz, setQuiz] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const { data } = await axios.get(`${API_URL}${id}`);
//         setQuiz(data);
//         setAnswers(new Array(data.questions.length).fill(null));
//       } catch (error) {
//         console.error('Failed to fetch quiz', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchQuiz();
//   }, [id]);

//   const handleAnswerSelect = (optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const { data } = await axios.post(`${API_URL}${id}/submit`, { answers });
//       navigate(`/quiz/${id}/results`, { state: { results: data, quizTitle: quiz.title } });
//     } catch (error) {
//       console.error('Failed to submit quiz', error);
//     }
//   };

//   if (loading) return <div className="text-center text-xl text-white">Loading Quiz...</div>;
//   if (!quiz) return <div className="text-center text-xl text-white">Quiz not found.</div>;

//   const currentQuestion = quiz.questions[currentQuestionIndex];
//   const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-900/50 border border-white/10 rounded-xl shadow-2xl backdrop-blur-sm">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h1 className="text-3xl font-bold text-white mb-1">{quiz.title}</h1>
//           <p className="text-purple-300">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
//         </div>
//         <div className="w-full max-w-xs bg-gray-700 rounded-full h-2.5 mt-2 ml-4">
//             <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}></div>
//         </div>
//       </div>
      
//       <div className="my-8">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-100">{currentQuestion.questionText}</h2>
//         <div className="space-y-4">
//           {currentQuestion.options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswerSelect(index)}
//               className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 
//                 ${answers[currentQuestionIndex] === index 
//                   ? 'bg-purple-500/30 border-purple-400 scale-105' 
//                   : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'}`}
//             >
//               <span className="font-medium text-white">{option}</span>
//             </button>
//           ))}
//         </div>
//       </div>
      
//       <div className="flex justify-end mt-8">
//         {isLastQuestion ? (
//           <button
//             onClick={handleSubmit}
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed"
//             disabled={answers[currentQuestionIndex] === null}
//           >
//             Submit Quiz
//           </button>
//         ) : (
//           <button
//             onClick={handleNext}
//             className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed"
//             disabled={answers[currentQuestionIndex] === null}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TakeQuiz;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/quizzes/';

const TakeQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const { data } = await axios.get(`${API_URL}${id}`);
        setQuiz(data);
        setAnswers(new Array(data.questions.length).fill(null));
      } catch (error) {
        console.error('Failed to fetch quiz', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [id]);

  const handleAnswerSelect = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(`${API_URL}${id}/submit`, { answers });
      navigate(`/quiz/${id}/results`, { state: { results: data, quizTitle: quiz.title } });
    } catch (error) {
      console.error('Failed to submit quiz', error);
    }
  };

  if (loading) return <div className="text-center text-xl text-slate-800 dark:text-white mt-10">Loading Quiz...</div>;
  if (!quiz) return <div className="text-center text-xl text-slate-800 dark:text-white mt-10">Quiz not found.</div>;

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-2xl dark:backdrop-blur-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-1">{quiz.title}</h1>
          <p className="text-purple-600 dark:text-purple-300">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
        </div>
        <div className="w-full max-w-xs bg-slate-200 dark:bg-gray-700 rounded-full h-2.5 mt-2 ml-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}></div>
        </div>
      </div>
      
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-gray-100">{currentQuestion.questionText}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 
                ${answers[currentQuestionIndex] === index 
                  ? 'bg-purple-100 dark:bg-purple-500/30 border-purple-500 dark:border-purple-400 scale-105' 
                  : 'bg-slate-50 dark:bg-white/10 border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/20'}`}
            >
              <span className="font-medium text-slate-800 dark:text-white">{option}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end mt-8">
        {isLastQuestion ? (
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed"
            disabled={answers[currentQuestionIndex] === null}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed"
            disabled={answers[currentQuestionIndex] === null}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default TakeQuiz;