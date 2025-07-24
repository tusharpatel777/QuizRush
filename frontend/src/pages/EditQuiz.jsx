
import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { XCircleIcon } from '@heroicons/react/24/solid';

const EditQuiz = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const { data } = await axiosInstance.get(`/api/quizzes/${id}`);
                setTitle(data.title);
                setDescription(data.description);
                setQuestions(Array.isArray(data.questions) ? data.questions : []);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch quiz data", error);
                alert("Could not load quiz data.");
                navigate('/my-quizzes');
            }
        };
        fetchQuiz();
    }, [id, navigate]);

    // Handler functions
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
        setIsSubmitting(true);
        try {
            await axiosInstance.put(`/api/quizzes/${id}`, { title, description, questions }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            navigate('/my-quizzes');
        } catch (error) {
            console.error('Error updating quiz:', error);
            alert('Failed to update quiz. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) return <div className="text-center mt-10 text-xl text-slate-800 dark:text-white">Loading Quiz Editor...</div>;

    return (
        <div className=" bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm max-w-4xl mx-auto my-10 p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-white">Edit Your Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Quiz Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 w-full p-3 bg-slate-100 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-300">Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 w-full p-3 bg-slate-100 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"></textarea>
                    </div>
                </div>
                
                <hr className="my-10 border-slate-300 dark:border-slate-700" />

                {questions.map((q, qIndex) => (
                    <div key={qIndex} className="mb-8 p-6 bg-slate-50 dark:bg-slate-900/50 border-l-4 border-purple-500 rounded-lg">
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
                            className="w-full p-3 mb-4 bg-slate-100 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            required
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {q.options.map((opt, oIndex) => (
                            <div key={oIndex} className="flex items-center bg-slate-100 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700 p-2 rounded-lg">
                                <input
                                    type="radio"
                                    name={`correctAnswer-${qIndex}`}
                                    id={`q${qIndex}o${oIndex}`}
                                    value={oIndex}
                                    checked={q.correctAnswer === oIndex}
                                    onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
                                    className="h-5 w-5 text-purple-600 bg-slate-200 dark:bg-slate-700 border-slate-400 dark:border-slate-600 focus:ring-purple-500 focus:ring-offset-slate-100 dark:focus:ring-offset-gray-800"
                                />
                                <input
                                    type="text"
                                    placeholder={`Option ${oIndex + 1}`}
                                    value={opt} // BUG FIXED HERE
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
                    <button type="button" onClick={addQuestion} className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold py-2 px-4 rounded-lg">
                        Add Question
                    </button>
                    <button type="submit" disabled={isSubmitting} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-transform hover:scale-105 disabled:opacity-50">
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditQuiz;