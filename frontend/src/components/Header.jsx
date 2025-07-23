// // // import React from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../hooks/useAuth';
// // // import ThemeToggle from './ThemeToggle';

// // // const Header = () => {
// // //   const { user, logout } = useAuth();
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     logout();
// // //     navigate('/login');
// // //   };

// // //   return (
// // //     <header className="bg-white dark:bg-gray-800 shadow-md">
// // //       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
// // //         <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
// // //           Quizora
// // //         </Link>
// // //         <div className="flex items-center space-x-4">
// // //           <nav className="hidden md:flex items-center space-x-4">
// // //             <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
// // //             <Link to="/quizzes" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Browse Quizzes</Link>
// // //             {user && (
// // //               <Link to="/quiz/create" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Create Quiz</Link>
// // //             )}
// // //           </nav>
// // //           <ThemeToggle />
// // //           {user ? (
// // //             // <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
// // //             //   Logout
// // //             // </button>
// // //             <button onClick={handleLogout}  type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>

// // //           ) : (
// // //             <div className="space-x-2">
// // //               <Link to="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
// // //                 Login
// // //               </Link>
// // //               <Link to="/register" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded">
// // //                 Register
// // //               </Link>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../hooks/useAuth';
// // import ThemeToggle from './ThemeToggle';

// // const Header = () => {
// //   const { user, logout } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     navigate('/login');
// //   };

// //   return (
// //     <header className="bg-transparent py-4">
// //       <div className="container mx-auto px-4 flex justify-between items-center">
// //         <Link to="/" className="text-2xl font-bold">
// //           <span>Quiz</span>
// //           <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
// //             Maker
// //           </span>
// //         </Link>
        
// //         <div className="flex items-center space-x-4">
// //           <nav className="hidden md:flex items-center space-x-6 text-sm">
// //             <Link to="/quizzes" className="text-gray-300 hover:text-white transition-colors">Browse Quizzes</Link>
// //             {user && (
// //               <Link to="/quiz/create" className="text-gray-300 hover:text-white transition-colors">Create Quiz</Link>
// //             )}
// //           </nav>
          
// //           <ThemeToggle />
          
// //           {user ? (
// //             <button onClick={handleLogout} className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg text-sm">
// //               Logout
// //             </button>
// //           ) : (
// //             <Link to="/login" className="bg-white hover:bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded-lg text-sm">
// //               Login / Register
// //             </Link>
// //           )}
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import ThemeToggle from './ThemeToggle';

// const Header = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   // Add a subtle bottom border that works in both themes
//   return (
//     <header className="bg-white/80 dark:bg-transparent backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-white/10">
//       <div className="container mx-auto px-4 flex justify-between items-center py-3">
//         <Link to="/" className="text-2xl font-bold">
//           {/* The logo text needs to be visible in light mode */}
//           <span className="text-slate-800 dark:text-white">Quiz</span>
//           <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//             Maker
//           </span>
//         </Link>
        
//         <div className="flex items-center space-x-4">
//           <nav className="hidden md:flex items-center space-x-6 text-sm">
//             {/* Nav links need to be visible in light mode */}
//             <Link to="/quizzes" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">Browse Quizzes</Link>
//             {user && (
//               <Link to="/quiz/create" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">Create Quiz</Link>
//             )}
//           </nav>
          
//           <ThemeToggle />
          
//           {user ? (
//             <button onClick={handleLogout} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="bg-slate-800 hover:bg-slate-900 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold py-2 px-4 rounded-lg text-sm">
//               Login / Register
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white/80 dark:bg-transparent backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-white/10">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-slate-800 dark:text-white">Quiz</span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Rush
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link to="/quizzes" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">Browse Quizzes</Link>
            {user && (
              <Link to="/quiz/create" className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors">Create Quiz</Link>
            )}
          </nav>
          
          <ThemeToggle />
          
          {user ? (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm">
              Logout
            </button>
          ) : (
            // --- THIS IS THE UPDATED BUTTON ---
            <Link 
              to="/login" 
              className="font-bold text-sm py-2 px-5 rounded-lg border-2 
                         text-purple-600 border-purple-600 
                         dark:text-purple-400 dark:border-purple-400 
                         transition-all duration-300 ease-in-out
                         hover:bg-purple-600 hover:text-white 
                         dark:hover:bg-purple-400 dark:hover:text-slate-900
                         hover:shadow-lg hover:shadow-purple-600/20
                         dark:hover:shadow-purple-400/20
                         hover:-translate-y-px"
            >
              Login / Register
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;