// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // const Home = () => {
// // //   return (
// // //     <div className="h-[80vh]  flex justify-center items-center">
// // //         <div className='container mx-auto px-4 py-16 text-center'>
// // //       <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Welcome to Quizora</h1>
// // //       <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
// // //         Create, share, and take quizzes on any topic.
// // //       </p>
// // //       <div className="space-x-4">
// // //         <Link to="/quiz/create" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg">
// // //           Create a Quiz
// // //         </Link>
// // //         <Link to="/quizzes" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-8 rounded-full text-lg">
// // //           Browse Quizzes
// // //         </Link>
// // //       </div>
// // //     </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { SparklesIcon } from '@heroicons/react/24/outline'; // Use outline for a lighter look

// // const Home = () => {
// //   return (
// //     <div className="relative isolate text-center overflow-hidden -mt-16">
// //       <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">

// //         {/* Decorative Sparkles */}
// //         <SparklesIcon className="w-10 h-10 text-purple-400 absolute top-20 left-1/4 opacity-50 animate-pulse" />
// //         <SparklesIcon className="w-6 h-6 text-pink-400 absolute top-1/3 right-1/4 opacity-50 animate-pulse delay-700" />
// //         <SparklesIcon className="w-8 h-8 text-indigo-400 absolute bottom-20 left-1/3 opacity-50 animate-pulse delay-300" />

// //         <div className="mb-8 flex justify-center">
// //           <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-white/20 hover:ring-white/30">
// //             Powered by MERN + Tailwind CSS.{' '}
// //             <Link to="/quizzes" className="font-semibold text-white">
// //               <span className="absolute inset-0" aria-hidden="true" />
// //               See quizzes <span aria-hidden="true">→</span>
// //             </Link>
// //           </div>
// //         </div>

// //         <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
// //           The Ultimate 
// //           <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
// //             AI
// //           </span> Quiz
// //           <br />
// //           Companion
// //         </h1>
// //         <p className="mt-6 text-lg leading-8 text-gray-300">
// //           Create, share, and challenge your knowledge with our AI-powered quiz platform.
// //         </p>

// //         <div className="mt-16 flex flex-col items-center justify-center gap-y-6">
// //             <div className="w-full max-w-2xl bg-gray-900/50 border border-white/10 rounded-xl p-8 shadow-2xl">
// //                 <h2 className="text-xl font-semibold text-white mb-6">What do you want to do today?</h2>
// //                 <div className="flex flex-col sm:flex-row justify-center gap-4">
// //                      <Link 
// //                         to="/quiz/create" 
// //                         className="w-full sm:w-auto flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
// //                     >
// //                         Create a New Quiz
// //                     </Link>
// //                     <Link 
// //                         to="/quizzes" 
// //                         className="w-full sm:w-auto flex-1 bg-transparent hover:bg-white/10 border-2 border-gray-500 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
// //                     >
// //                         Browse Quizzes
// //                     </Link>
// //                 </div>
// //             </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { SparklesIcon } from '@heroicons/react/24/outline';
// import { useTheme } from '../hooks/useTheme';

// const Home = () => {
//   const { theme } = useTheme(); // Get the current theme

//   return (
//     // The relative and isolate classes are important for positioning the sparkles
//     <div className="relative isolate text-center overflow-hidden -mt-16">
      
//       {/* Sparkles will only be visible in dark mode for better contrast */}
//       <div className="hidden dark:block">
//         <SparklesIcon className="w-10 h-10 text-purple-400 absolute top-20 left-1/4 opacity-50 animate-pulse" />
//         <SparklesIcon className="w-6 h-6 text-pink-400 absolute top-1/3 right-1/4 opacity-50 animate-pulse delay-700" />
//         <SparklesIcon className="w-8 h-8 text-indigo-400 absolute bottom-20 left-1/3 opacity-50 animate-pulse delay-300" />
//       </div>

//       <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-40">
//         <div className="mb-8 flex justify-center">
//           <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-white/20 hover:ring-gray-900/20 dark:hover:ring-white/30">
//             Powered by MERN + Tailwind CSS.{' '}
//             <Link to="/quizzes" className="font-semibold text-indigo-600 dark:text-white">
//               <span className="absolute inset-0" aria-hidden="true" />
//               Browse Quizzes <span aria-hidden="true">→</span>
//             </Link>
//           </div>
//         </div>

//         <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
//           The Ultimate 
//           <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             {' '}AI{' '}
//           </span> 
//           Quiz
//           <br />
//           Companion
//         </h1>
//         <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
//           Create, share, and challenge your knowledge with our AI-powered quiz platform.
//         </p>

//         <div className="mt-16 flex flex-col items-center justify-center gap-y-6">
//             <div className="w-full max-w-2xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-8 shadow-lg dark:shadow-2xl dark:shadow-purple-500/10 dark:backdrop-blur-sm">
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">What do you want to do today?</h2>
//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                      <Link 
//                         to="/quiz/create" 
//                         className="w-full sm:w-auto flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
//                     >
//                         Create a New Quiz
//                     </Link>
//                     <Link 
//                         to="/quizzes" 
//                         className="w-full sm:w-auto flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-transparent dark:hover:bg-white/10 border-2 border-gray-300 dark:border-gray-500 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105"
//                     >
//                         Browse Quizzes
//                     </Link>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
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