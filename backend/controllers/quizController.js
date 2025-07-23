const Quiz = require('../models/quizModel');

// @desc    Create new quiz
// @route   POST /api/quizzes
// @access  Private
const createQuiz = async (req, res) => {
  const { title, description, questions } = req.body;

  if (!title || !questions || questions.length === 0) {
    return res.status(400).json({ message: 'Please provide title and questions' });
  }

  const quiz = new Quiz({
    creator: req.user.id,
    title,
    description,
    questions,
  });

  const createdQuiz = await quiz.save();
  res.status(201).json(createdQuiz);
};

// @desc    Get all quizzes
// @route   GET /api/quizzes
// @access  Public
const getAllQuizzes = async (req, res) => {
  const quizzes = await Quiz.find({}).populate('creator', 'name');
  res.json(quizzes);
};

// @desc    Get quiz by ID
// @route   GET /api/quizzes/:id
// @access  Public
const getQuizById = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);

  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404).json({ message: 'Quiz not found' });
  }
};

// @desc    Submit a quiz and get results
// @route   POST /api/quizzes/:id/submit
// @access  Public
const submitQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }

  const userAnswers = req.body.answers; // Expects an array of selected option indices
  let score = 0;
  const results = [];

  quiz.questions.forEach((question, index) => {
    const isCorrect = question.correctAnswer === userAnswers[index];
    if (isCorrect) {
      score++;
    }
    results.push({
      questionText: question.questionText,
      userAnswer: userAnswers[index],
      correctAnswer: question.correctAnswer,
      options: question.options,
      isCorrect,
    });
  });

  res.json({
    totalQuestions: quiz.questions.length,
    score,
    results,
  });
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  submitQuiz,
};