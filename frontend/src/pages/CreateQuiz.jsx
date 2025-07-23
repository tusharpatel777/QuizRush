// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useAuth } from '../hooks/useAuth';

// // // const CreateQuiz = () => {
// // //     const [title, setTitle] = useState('');
// // //     const [description, setDescription] = useState('');
// // //     const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
// // //     const navigate = useNavigate();
// // //     const { token } = useAuth();

// // //     const handleQuestionChange = (index, event) => {
// // //         const newQuestions = [...questions];
// // //         newQuestions[index][event.target.name] = event.target.value;
// // //         setQuestions(newQuestions);
// // //     };

// // //     const handleOptionChange = (qIndex, oIndex, event) => {
// // //         const newQuestions = [...questions];
// // //         newQuestions[qIndex].options[oIndex] = event.target.value;
// // //         setQuestions(newQuestions);
// // //     };

// // //     const handleCorrectAnswerChange = (qIndex, event) => {
// // //         const newQuestions = [...questions];
// // //         newQuestions[qIndex].correctAnswer = parseInt(event.target.value);
// // //         setQuestions(newQuestions);
// // //     };

// // //     const addQuestion = () => {
// // //         setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
// // //     };
    
// // //     const removeQuestion = (index) => {
// // //         const newQuestions = questions.filter((_, i) => i !== index);
// // //         setQuestions(newQuestions);
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             await axios.post('http://localhost:5000/api/quizzes', { title, description, questions }, {
// // //                 headers: { Authorization: `Bearer ${token}` }
// // //             });
// // //             navigate('/quizzes');
// // //         } catch (error) {
// // //             console.error('Error creating quiz:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="max-w-4xl mx-auto mt-10 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
// // //             <h2 className="text-3xl font-bold mb-6">Create a New Quiz</h2>
// // //             <form onSubmit={handleSubmit}>
// // //                 <div className="mb-4">
// // //                     <label className="block text-lg font-medium mb-2">Quiz Title</label>
// // //                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" required />
// // //                 </div>
// // //                 <div className="mb-6">
// // //                     <label className="block text-lg font-medium mb-2">Description</label>
// // //                     <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
// // //                 </div>
                
// // //                 {questions.map((q, qIndex) => (
// // //                     <div key={qIndex} className="mb-8 p-4 border-l-4 border-indigo-500 bg-gray-50 dark:bg-gray-700/50 rounded">
// // //                         <div className="flex justify-between items-center mb-4">
// // //                             <h3 className="text-xl font-semibold">Question {qIndex + 1}</h3>
// // //                             <button type="button" onClick={() => removeQuestion(qIndex)} className="text-red-500 hover:text-red-700 font-bold">Remove</button>
// // //                         </div>
// // //                         <input
// // //                             type="text"
// // //                             name="questionText"
// // //                             placeholder="Question Text"
// // //                             value={q.questionText}
// // //                             onChange={(e) => handleQuestionChange(qIndex, e)}
// // //                             className="w-full p-2 mb-2 border rounded dark:bg-gray-600 dark:border-gray-500"
// // //                             required
// // //                         />
// // //                         {q.options.map((opt, oIndex) => (
// // //                             <div key={oIndex} className="flex items-center mb-2">
// // //                                 <input
// // //                                     type="text"
// // //                                     placeholder={`Option ${oIndex + 1}`}
// // //                                     value={opt}
// // //                                     onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
// // //                                     className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500"
// // //                                     required
// // //                                 />
// // //                                 <input
// // //                                     type="radio"
// // //                                     name={`correctAnswer-${qIndex}`}
// // //                                     value={oIndex}
// // //                                     checked={q.correctAnswer === oIndex}
// // //                                     onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
// // //                                     className="ml-4 h-5 w-5 text-indigo-600 focus:ring-indigo-500"
// // //                                 />
// // //                                 <label className="ml-2">Correct</label>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 ))}

// // //                 <div className="flex justify-between items-center mt-6">
// // //                     <button type="button" onClick={addQuestion} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded">
// // //                         Add Question
// // //                     </button>
// // //                     <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded">
// // //                         Create Quiz
// // //                     </button>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default CreateQuiz;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from '../hooks/useAuth';
// // import { XCircleIcon } from '@heroicons/react/24/solid';

// // const CreateQuiz = () => {
// //     const [title, setTitle] = useState('');
// //     const [description, setDescription] = useState('');
// //     const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
// //     const navigate = useNavigate();
// //     const { token } = useAuth();

// //     const handleQuestionChange = (index, event) => {
// //         const newQuestions = [...questions];
// //         newQuestions[index][event.target.name] = event.target.value;
// //         setQuestions(newQuestions);
// //     };

// //     const handleOptionChange = (qIndex, oIndex, event) => {
// //         const newQuestions = [...questions];
// //         newQuestions[qIndex].options[oIndex] = event.target.value;
// //         setQuestions(newQuestions);
// //     };

// //     const handleCorrectAnswerChange = (qIndex, event) => {
// //         const newQuestions = [...questions];
// //         newQuestions[qIndex].correctAnswer = parseInt(event.target.value);
// //         setQuestions(newQuestions);
// //     };

// //     const addQuestion = () => {
// //         setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
// //     };
    
// //     const removeQuestion = (index) => {
// //         const newQuestions = questions.filter((_, i) => i !== index);
// //         setQuestions(newQuestions);
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await axios.post('http://localhost:5000/api/quizzes', { title, description, questions }, {
// //                 headers: { Authorization: `Bearer ${token}` }
// //             });
// //             navigate('/quizzes');
// //         } catch (error) {
// //             console.error('Error creating quiz:', error);
// //         }
// //     };

// //     return (
// //         <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-900/50 border border-white/10 rounded-xl shadow-2xl backdrop-blur-sm">
// //             <h2 className="text-3xl font-bold mb-6 text-white">Create a New Quiz</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="mb-4">
// //                     <label className="block text-lg font-medium mb-2 text-gray-300">Quiz Title</label>
// //                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
// //                 </div>
// //                 <div className="mb-8">
// //                     <label className="block text-lg font-medium mb-2 text-gray-300">Description</label>
// //                     <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>
// //                 </div>
                
// //                 {questions.map((q, qIndex) => (
// //                     <div key={qIndex} className="mb-8 p-6 bg-white/5 border-l-4 border-purple-500 rounded-lg">
// //                         <div className="flex justify-between items-center mb-4">
// //                             <h3 className="text-xl font-semibold text-white">Question {qIndex + 1}</h3>
// //                             <button type="button" onClick={() => removeQuestion(qIndex)} className="text-red-400 hover:text-red-300 flex items-center gap-1">
// //                                 <XCircleIcon className="w-5 h-5" />
// //                                 <span>Remove</span>
// //                             </button>
// //                         </div>
// //                         <input
// //                             type="text"
// //                             name="questionText"
// //                             placeholder="Question Text"
// //                             value={q.questionText}
// //                             onChange={(e) => handleQuestionChange(qIndex, e)}
// //                             className="w-full p-3 mb-4 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
// //                             required
// //                         />
// //                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                         {q.options.map((opt, oIndex) => (
// //                             <div key={oIndex} className="flex items-center bg-white/5 p-2 rounded-lg">
// //                                 <input
// //                                     type="radio"
// //                                     name={`correctAnswer-${qIndex}`}
// //                                     id={`q${qIndex}o${oIndex}`}
// //                                     value={oIndex}
// //                                     checked={q.correctAnswer === oIndex}
// //                                     onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
// //                                     className="h-5 w-5 text-purple-500 bg-gray-700 border-gray-600 focus:ring-purple-600 focus:ring-2"
// //                                 />
// //                                 <input
// //                                     type="text"
// //                                     placeholder={`Option ${oIndex + 1}`}
// //                                     value={opt}
// //                                     onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
// //                                     className="w-full ml-3 bg-transparent text-white focus:outline-none"
// //                                     required
// //                                 />
// //                             </div>
// //                         ))}
// //                         </div>
// //                     </div>
// //                 ))}

// //                 <div className="flex justify-between items-center mt-6">
// //                     <button type="button" onClick={addQuestion} className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg">
// //                         Add Question
// //                     </button>
// //                     <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105">
// //                         Create Quiz
// //                     </button>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };

// // export default CreateQuiz;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { XCircleIcon } from '@heroicons/react/24/solid';

// const CreateQuiz = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
//     const navigate = useNavigate();
//     const { token } = useAuth();

//     const handleQuestionChange = (index, event) => {
//         const newQuestions = [...questions];
//         newQuestions[index][event.target.name] = event.target.value;
//         setQuestions(newQuestions);
//     };

//     const handleOptionChange = (qIndex, oIndex, event) => {
//         const newQuestions = [...questions];
//         newQuestions[qIndex].options[oIndex] = event.target.value;
//         setQuestions(newQuestions);
//     };

//     const handleCorrectAnswerChange = (qIndex, event) => {
//         const newQuestions = [...questions];
//         newQuestions[qIndex].correctAnswer = parseInt(event.target.value);
//         setQuestions(newQuestions);
//     };

//     const addQuestion = () => {
//         setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
//     };
    
//     const removeQuestion = (index) => {
//         if (questions.length > 1) { // Prevent removing the last question
//             const newQuestions = questions.filter((_, i) => i !== index);
//             setQuestions(newQuestions);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/quizzes', { title, description, questions }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             navigate('/quizzes');
//         } catch (error) {
//             console.error('Error creating quiz:', error);
//         }
//     };

//     return (
//         // Main Card: White in light, Slate-700 in dark
//         <div className="max-w-4xl mx-auto my-10 p-8 bg-white dark:bg-slate-700 rounded-xl shadow-2xl">
//             <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Create a New Quiz</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="space-y-6">
//                     <div>
//                         <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Quiz Title</label>
//                         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Description</label>
//                         <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 w-full p-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>
//                     </div>
//                 </div>
                
//                 <hr className="my-10 border-slate-300 dark:border-slate-600" />

//                 {questions.map((q, qIndex) => (
//                     <div key={qIndex} className="mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 border-l-4 border-purple-500 rounded-lg">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Question {qIndex + 1}</h3>
//                             {questions.length > 1 && (
//                                 <button type="button" onClick={() => removeQuestion(qIndex)} className="text-red-500 hover:text-red-400 flex items-center gap-1 text-sm">
//                                     <XCircleIcon className="w-5 h-5" />
//                                     <span>Remove</span>
//                                 </button>
//                             )}
//                         </div>
//                         <input
//                             type="text"
//                             name="questionText"
//                             placeholder="Question Text"
//                             value={q.questionText}
//                             onChange={(e) => handleQuestionChange(qIndex, e)}
//                             className="w-full p-3 mb-4 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                             required
//                         />
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {q.options.map((opt, oIndex) => (
//                             <div key={oIndex} className="flex items-center bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 p-2 rounded-lg">
//                                 <input
//                                     type="radio"
//                                     name={`correctAnswer-${qIndex}`}
//                                     id={`q${qIndex}o${oIndex}`}
//                                     value={oIndex}
//                                     checked={q.correctAnswer === oIndex}
//                                     onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
//                                     className="h-5 w-5 text-purple-600 bg-slate-200 dark:bg-slate-700 border-slate-400 dark:border-slate-500 focus:ring-purple-500 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-800"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder={`Option ${oIndex + 1}`}
//                                     value={opt}
//                                     onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
//                                     className="w-full ml-3 bg-transparent text-slate-700 dark:text-slate-300 placeholder-slate-500 focus:outline-none"
//                                     required
//                                 />
//                             </div>
//                         ))}
//                         </div>
//                     </div>
//                 ))}

//                 <div className="flex justify-between items-center mt-10">
//                     <button type="button" onClick={addQuestion} className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg">
//                         Add Question
//                     </button>
//                     <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg">
//                         Create Quiz
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default CreateQuiz;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { XCircleIcon } from '@heroicons/react/24/solid';

const CreateQuiz = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
    const navigate = useNavigate();
    const { token } = useAuth();

    const handleQuestionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index][event.target.name] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleOptionChange = (qIndex, oIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (qIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].correctAnswer = parseInt(event.target.value);
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: 0 }]);
    };
    
    const removeQuestion = (index) => {
        if (questions.length > 1) {
            const newQuestions = questions.filter((_, i) => i !== index);
            setQuestions(newQuestions);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/quizzes', { title, description, questions }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            navigate('/quizzes');
        } catch (error) {
            console.error('Error creating quiz:', error);
        }
    };

    return (
        // Main Card: White in light, Glass in dark
        <div className="max-w-4xl mx-auto my-10 p-8 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-2xl dark:backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Create a New Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-gray-300">Quiz Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full p-3 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-gray-300">Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 w-full p-3 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>
                    </div>
                </div>
                
                <hr className="my-10 border-slate-300 dark:border-white/10" />

                {questions.map((q, qIndex) => (
                    <div key={qIndex} className="mb-8 p-6 bg-slate-50 dark:bg-white/5 border-l-4 border-purple-500 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">Question {qIndex + 1}</h3>
                            {questions.length > 1 && (
                                <button type="button" onClick={() => removeQuestion(qIndex)} className="text-red-500 hover:text-red-400 flex items-center gap-1 text-sm">
                                    <XCircleIcon className="w-5 h-5" />
                                    <span>Remove</span>
                                </button>
                            )}
                        </div>
                        <input
                            type="text"
                            name="questionText"
                            placeholder="Question Text"
                            value={q.questionText}
                            onChange={(e) => handleQuestionChange(qIndex, e)}
                            className="w-full p-3 mb-4 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            required
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {q.options.map((opt, oIndex) => (
                            <div key={oIndex} className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/20 p-2 rounded-lg">
                                <input
                                    type="radio"
                                    name={`correctAnswer-${qIndex}`}
                                    id={`q${qIndex}o${oIndex}`}
                                    value={oIndex}
                                    checked={q.correctAnswer === oIndex}
                                    onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
                                    className="h-5 w-5 text-purple-600 bg-slate-200 dark:bg-gray-700 border-slate-400 dark:border-gray-600 focus:ring-purple-500 focus:ring-offset-slate-100 dark:focus:ring-offset-gray-800"
                                />
                                <input
                                    type="text"
                                    placeholder={`Option ${oIndex + 1}`}
                                    value={opt}
                                    onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                                    className="w-full ml-3 bg-transparent text-slate-700 dark:text-white placeholder-slate-500 focus:outline-none"
                                    required
                                />
                            </div>
                        ))}
                        </div>
                    </div>
                ))}

                <div className="flex justify-between items-center mt-10">
                    <button type="button" onClick={addQuestion} className="bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg">
                        Add Question
                    </button>
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg">
                        Create Quiz
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateQuiz;