// // // import React from 'react';
// // // import { useLocation, Link } from 'react-router-dom';

// // // const QuizResults = () => {
// // //   const location = useLocation();
// // //   const { results, quizTitle } = location.state || {};

// // //   if (!results) {
// // //     return (
// // //       <div className="text-center mt-10">
// // //         <p>No results to display. Please take a quiz first.</p>
// // //         <Link to="/quizzes" className="text-indigo-600 hover:underline">Browse Quizzes</Link>
// // //       </div>
// // //     );
// // //   }

// // //   const { score, totalQuestions, results: detailedResults } = results;

// // //   return (
// // //     <div className="max-w-3xl mx-auto mt-10 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
// // //       <h1 className="text-4xl font-bold text-center mb-2">Quiz Results</h1>
// // //       <h2 className="text-2xl text-center text-gray-600 dark:text-gray-400 mb-6">{quizTitle}</h2>

// // //       <div className="text-center bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg mb-8">
// // //         <p className="text-xl">Your Score:</p>
// // //         <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">{score} / {totalQuestions}</p>
// // //       </div>

// // //       <div>
// // //         <h3 className="text-2xl font-semibold mb-4">Detailed Breakdown:</h3>
// // //         {detailedResults.map((result, index) => (
// // //           <div key={index} className={`p-4 mb-4 rounded-lg border-l-4 ${result.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/50' : 'border-red-500 bg-red-50 dark:bg-red-900/50'}`}>
// // //             <p className="font-bold mb-2">{index + 1}. {result.questionText}</p>
// // //             <p className="text-sm">Your answer: <span className="font-semibold">{result.options[result.userAnswer]}</span></p>
// // //             {!result.isCorrect && (
// // //               <p className="text-sm">Correct answer: <span className="font-semibold">{result.options[result.correctAnswer]}</span></p>
// // //             )}
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div className="text-center mt-8">
// // //         <Link to="/quizzes" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded">
// // //           Take Another Quiz
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default QuizResults;

// // import React from 'react';
// // import { useLocation, Link } from 'react-router-dom';

// // const QuizResults = () => {
// //   const location = useLocation();
// //   const { results, quizTitle } = location.state || {};

// //   if (!results) {
// //     return (
// //       <div className="text-center mt-10 text-white">
// //         <p>No results to display. Please take a quiz first.</p>
// //         <Link to="/quizzes" className="text-purple-400 hover:underline">Browse Quizzes</Link>
// //       </div>
// //     );
// //   }

// //   const { score, totalQuestions, results: detailedResults } = results;
// //   const percentage = Math.round((score / totalQuestions) * 100);

// //   return (
// //     <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-900/50 border border-white/10 rounded-xl shadow-2xl backdrop-blur-sm">
// //       <h1 className="text-4xl font-bold text-center mb-2 text-white">Quiz Results</h1>
// //       <h2 className="text-2xl text-center text-gray-400 mb-8">{quizTitle}</h2>

// //       <div className="text-center bg-gradient-to-br from-purple-600/50 to-pink-600/50 p-6 rounded-lg mb-8">
// //         <p className="text-xl text-gray-200">Your Score:</p>
// //         <p className="text-6xl font-bold text-white my-2">{percentage}%</p>
// //         <p className="text-gray-300">{score} out of {totalQuestions} correct</p>
// //       </div>

// //       <div>
// //         <h3 className="text-2xl font-semibold mb-4 text-white">Detailed Breakdown:</h3>
// //         <div className="space-y-4">
// //         {detailedResults.map((result, index) => (
// //           <div key={index} className={`p-4 rounded-lg border-l-4 ${result.isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
// //             <p className="font-bold mb-2 text-gray-200">{index + 1}. {result.questionText}</p>
// //             <p className={`text-sm ${result.isCorrect ? 'text-gray-300' : 'text-red-300'}`}>
// //               Your answer: <span className="font-semibold">{result.options[result.userAnswer]}</span>
// //             </p>
// //             {!result.isCorrect && (
// //               <p className="text-sm text-green-300">
// //                 Correct answer: <span className="font-semibold">{result.options[result.correctAnswer]}</span>
// //               </p>
// //             )}
// //           </div>
// //         ))}
// //         </div>
// //       </div>
// //       <div className="text-center mt-8">
// //         <Link to="/quizzes" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
// //           Take Another Quiz
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuizResults;
// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';

// const QuizResults = () => {
//   const location = useLocation();
//   const { results, quizTitle } = location.state || {};

//   if (!results) {
//     return (
//       <div className="text-center mt-10 text-slate-800 dark:text-white">
//         <p>No results to display. Please take a quiz first.</p>
//         <Link to="/quizzes" className="text-purple-600 dark:text-purple-400 hover:underline">Browse Quizzes</Link>
//       </div>
//     );
//   }

//   const { score, totalQuestions, results: detailedResults } = results;
//   const percentage = Math.round((score / totalQuestions) * 100);

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-2xl dark:backdrop-blur-sm">
//       <h1 className="text-4xl font-bold text-center mb-2 text-slate-800 dark:text-white">Quiz Results</h1>
//       <h2 className="text-2xl text-center text-slate-500 dark:text-gray-400 mb-8">{quizTitle}</h2>

//       <div className="text-center bg-purple-50 dark:bg-gradient-to-br dark:from-purple-600/50 dark:to-pink-600/50 p-6 rounded-lg mb-8">
//         <p className="text-xl text-slate-600 dark:text-gray-200">Your Score:</p>
//         <p className="text-6xl font-bold text-purple-600 dark:text-white my-2">{percentage}%</p>
//         <p className="text-slate-500 dark:text-gray-300">{score} out of {totalQuestions} correct</p>
//       </div>

//       <div>
//         <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">Detailed Breakdown:</h3>
//         <div className="space-y-4">
//         {detailedResults.map((result, index) => (
//           <div key={index} className={`p-4 rounded-lg border-l-4 ${result.isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-500/10' : 'border-red-500 bg-red-50 dark:bg-red-500/10'}`}>
//             <p className="font-bold mb-2 text-slate-700 dark:text-gray-200">{index + 1}. {result.questionText}</p>
//             <p className={`text-sm ${result.isCorrect ? 'text-slate-600 dark:text-gray-300' : 'text-red-600 dark:text-red-300'}`}>
//               Your answer: <span className="font-semibold">{result.options[result.userAnswer]}</span>
//             </p>
//             {!result.isCorrect && (
//               <p className="text-sm text-green-600 dark:text-green-300">
//                 Correct answer: <span className="font-semibold">{result.options[result.correctAnswer]}</span>
//               </p>
//             )}
//           </div>
//         ))}
//         </div>
//       </div>
//       <div className="text-center mt-8">
//         <Link to="/quizzes" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105">
//           Take Another Quiz
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default QuizResults;
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import CountUp from 'react-countup';
import { useWindowSize } from '@react-hook/window-size'; // react-confetti needs window size
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const QuizResults = () => {
  const location = useLocation();
  const [width, height] = useWindowSize();
  const { results, quizTitle } = location.state || {};
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (results) {
      const percentage = (results.score / results.totalQuestions) * 100;
      if (percentage >= 80) {
        setShowConfetti(true);
        // Turn off confetti after 10 seconds
        const timer = setTimeout(() => setShowConfetti(false), 10000);
        return () => clearTimeout(timer);
      }
    }
  }, [results]);

  if (!results) {
    return (
      <div className="text-center mt-10 text-slate-800 dark:text-white">
        <p>No results to display. Please take a quiz first.</p>
        <Link to="/quizzes" className="text-purple-600 dark:text-purple-400 hover:underline">Browse Quizzes</Link>
      </div>
    );
  }

  const { score, totalQuestions, results: detailedResults } = results;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={400} />}
      
      <div className="max-w-3xl mx-auto my-10 p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-2xl dark:backdrop-blur-sm">
        <div className="text-center">
            <h2 className="text-2xl text-slate-500 dark:text-gray-400">{quizTitle}</h2>
            <h1 className="text-4xl font-bold mt-2 mb-8 text-slate-800 dark:text-white">Quiz Completed!</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-slate-50 dark:bg-black/20 rounded-lg mb-8">
            <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                        className="text-slate-200 dark:text-white/10"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    {/* Progress circle */}
                    <circle
                        className={`${getScoreColor()} transition-all duration-1000 ease-out`}
                        strokeWidth="10"
                        strokeDasharray={2 * Math.PI * 45}
                        strokeDashoffset={2 * Math.PI * 45 * (1 - percentage / 100)}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        transform="rotate(-90 50 50)"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-5xl font-bold ${getScoreColor()}`}>
                      <CountUp end={percentage} duration={2} />%
                    </span>
                    <span className="text-sm text-slate-500 dark:text-gray-400">Score</span>
                </div>
            </div>
            <div className="text-center md:text-left">
                <p className="text-xl text-slate-600 dark:text-gray-200">You scored</p>
                <p className="text-4xl font-bold text-slate-800 dark:text-white">
                    <CountUp end={score} duration={1.5} /> / {totalQuestions}
                </p>
                <p className="text-slate-500 dark:text-gray-400 mt-1">questions correct</p>
            </div>
        </div>

        <div>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">Detailed Breakdown</h3>
            <div className="space-y-3">
            {detailedResults.map((result, index) => (
                <div key={index} className={`p-4 rounded-lg flex items-start gap-4 ${result.isCorrect ? 'bg-green-50 dark:bg-green-500/10' : 'bg-red-50 dark:bg-red-500/10'}`}>
                    <div>
                        {result.isCorrect ? (
                            <CheckCircleIcon className="w-6 h-6 text-green-500" />
                        ) : (
                            <XCircleIcon className="w-6 h-6 text-red-500" />
                        )}
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold mb-1 text-slate-700 dark:text-gray-200">{result.questionText}</p>
                        <p className={`text-sm ${result.isCorrect ? 'text-slate-600 dark:text-gray-400' : 'text-red-600 dark:text-red-300'}`}>
                            Your answer: <span className="font-medium">{result.options[result.userAnswer]}</span>
                        </p>
                        {!result.isCorrect && (
                            <p className="text-sm text-green-600 dark:text-green-300">
                                Correct answer: <span className="font-medium">{result.options[result.correctAnswer]}</span>
                            </p>
                        )}
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className="text-center mt-8">
            <Link to="/quizzes" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 shadow-lg">
                Take Another Quiz
            </Link>
        </div>
      </div>
    </>
  );
};

export default QuizResults;