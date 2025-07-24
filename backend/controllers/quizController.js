// const Quiz = require('../models/quizModel');

// // @desc    Create new quiz
// // @route   POST /api/quizzes
// // @access  Private
// const createQuiz = async (req, res) => {
//   const { title, description, questions } = req.body;

//   if (!title || !questions || questions.length === 0) {
//     return res.status(400).json({ message: 'Please provide title and questions' });
//   }

//   const quiz = new Quiz({
//     creator: req.user.id,
//     title,
//     description,
//     questions,
//   });

//   const createdQuiz = await quiz.save();
//   res.status(201).json(createdQuiz);
// };

// // @desc    Get all quizzes
// // @route   GET /api/quizzes
// // @access  Public
// const getAllQuizzes = async (req, res) => {
//   const quizzes = await Quiz.find({}).populate('creator', 'name');
//   res.json(quizzes);
// };

// // @desc    Get quiz by ID
// // @route   GET /api/quizzes/:id
// // @access  Public
// const getQuizById = async (req, res) => {
//   const quiz = await Quiz.findById(req.params.id);

//   if (quiz) {
//     res.json(quiz);
//   } else {
//     res.status(404).json({ message: 'Quiz not found' });
//   }
// };

// // @desc    Submit a quiz and get results
// // @route   POST /api/quizzes/:id/submit
// // @access  Public
// const submitQuiz = async (req, res) => {
//   const quiz = await Quiz.findById(req.params.id);

//   if (!quiz) {
//     return res.status(404).json({ message: 'Quiz not found' });
//   }

//   const userAnswers = req.body.answers; // Expects an array of selected option indices
//   let score = 0;
//   const results = [];

//   quiz.questions.forEach((question, index) => {
//     const isCorrect = question.correctAnswer === userAnswers[index];
//     if (isCorrect) {
//       score++;
//     }
//     results.push({
//       questionText: question.questionText,
//       userAnswer: userAnswers[index],
//       correctAnswer: question.correctAnswer,
//       options: question.options,
//       isCorrect,
//     });
//   });

//   res.json({
//     totalQuestions: quiz.questions.length,
//     score,
//     results,
//   });
// };

// module.exports = {
//   createQuiz,
//   getAllQuizzes,
//   getQuizById,
//   submitQuiz,
// };

const Quiz = require('../models/quizModel');
const User = require('../models/userModel'); // We might need this for checks

// @desc    Create new quiz
// @route   POST /api/quizzes
// @access  Private
const createQuiz = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Get all quizzes
// @route   GET /api/quizzes
// @access  Public
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({}).sort({ createdAt: -1 }).populate('creator', 'name');
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Get quiz by ID
// @route   GET /api/quizzes/:id
// @access  Public
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (quiz) {
      res.json(quiz);
    } else {
      res.status(404).json({ message: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Update a quiz
// @route   PUT /api/quizzes/:id
// @access  Private
const updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    // Check if the logged-in user is the creator of the quiz
    if (quiz.creator.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const { title, description, questions } = req.body;

    quiz.title = title || quiz.title;
    quiz.description = description || quiz.description;
    quiz.questions = questions || quiz.questions;

    const updatedQuiz = await quiz.save();
    res.json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Delete a quiz
// @route   DELETE /api/quizzes/:id
// @access  Private
const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    // Check if the logged-in user is the creator of the quiz
    if (quiz.creator.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await quiz.deleteOne(); // Mongoose v6+ uses deleteOne()

    res.json({ id: req.params.id, message: 'Quiz removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};


// @desc    Submit a quiz and get results
// @route   POST /api/quizzes/:id/submit
// @access  Public
const submitQuiz = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz, // Export new function
  deleteQuiz, // Export new function
  submitQuiz,
};