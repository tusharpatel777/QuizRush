import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import QuizList from './pages/QuizList';
import CreateQuiz from './pages/CreateQuiz';
import TakeQuiz from './pages/TakeQuiz';
import QuizResults from './pages/QuizResults';
import NotFound from './pages/NotFound';
import MyQuizzes from './pages/MyQuizzes'; // Import new page
import EditQuiz from './pages/EditQuiz';   // Import new page

// function App() {
//   return (
//     <AuthProvider>
//       <ThemeProvider>
//         <Router>
//           <div className="min-h-screen flex flex-col">
//             <Header />
//             <main className="flex-grow container mx-auto px-4 py-8 ">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/quizzes" element={<QuizList />} />
//                 <Route path="/quiz/:id" element={<TakeQuiz />} />
//                 <Route path="/quiz/:id/results" element={<QuizResults />} />
                
//                 {/* Protected Routes */}
//                 <Route element={<ProtectedRoute />}>
//                   <Route path="/quiz/create" element={<CreateQuiz />} />
//                 </Route>

//                 <Route path="*" element={<NotFound />} />
//               </Routes>
//             </main>
//           </div>
//         </Router>
//       </ThemeProvider>
//     </AuthProvider>
//   );
// }

// export default App;

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/quizzes" element={<QuizList />} />
                <Route path="/quiz/:id" element={<TakeQuiz />} />
                <Route path="/quiz/:id/results" element={<QuizResults />} />
                
                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/quiz/create" element={<CreateQuiz />} />
                  <Route path="/my-quizzes" element={<MyQuizzes />} /> {/* Add this route */}
                  <Route path="/quiz/edit/:id" element={<EditQuiz />} /> {/* Add this route */}
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;