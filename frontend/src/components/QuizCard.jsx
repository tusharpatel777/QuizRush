// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const QuizCard = ({ quiz }) => {
// //   return (
// //     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
// //       <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{quiz.title}</h3>
// //       <p className="text-gray-600 dark:text-gray-400 mb-2">Created by: {quiz.creator?.name || 'Unknown'}</p>
// //       <p className="text-gray-700 dark:text-gray-300 mb-4">{quiz.description}</p>
// //       <div className="flex justify-between items-center">
// //         <span className="text-sm text-gray-500">{quiz.questions.length} Questions</span>
// //         <Link 
// //           to={`/quiz/${quiz._id}`}
// //           className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
// //         >
// //           Take Quiz
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default QuizCard;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const QuizCard = ({ quiz }) => {
//   // Use light mode classes as the base, and dark mode overrides
//   return (
//     <div className="bg-white dark:bg-gray-900/50 dark:border dark:border-white/10 rounded-xl p-6 shadow-md dark:shadow-2xl dark:shadow-purple-500/10 transition-all duration-300 hover:shadow-lg dark:hover:border-purple-500/50 backdrop-blur-sm">
//       <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{quiz.title}</h3>
//       <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Created by: {quiz.creator?.name || 'Unknown'}</p>
//       <p className="text-gray-600 dark:text-gray-300 mb-4 h-12 overflow-hidden">{quiz.description}</p>
//       <div className="flex justify-between items-center mt-4">
//         <span className="text-xs font-semibold uppercase tracking-wider bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300 py-1 px-3 rounded-full">{quiz.questions.length} Questions</span>
//         <Link 
//           to={`/quiz/${quiz._id}`}
//           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-transform hover:scale-105"
//         >
//           Take Quiz
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default QuizCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const QuizCard = ({ quiz }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-md dark:shadow-2xl dark:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 dark:hover:border-purple-400/50 backdrop-blur-sm group">
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
          // This creates a beautiful fade-out effect if the text is too long
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
        
        <Link 
          to={`/quiz/${quiz._id}`}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-5 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300"
        >
          Take Quiz
        </Link>
      </div>
    </div>
  );
};

export default QuizCard; // Corrected the export name