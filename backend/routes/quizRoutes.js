const express = require('express');
const router = express.Router();
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  submitQuiz,
} = require('../controllers/quizController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createQuiz).get(getAllQuizzes);
router.route('/:id').get(getQuizById);
router.route('/:id/submit').post(submitQuiz);

module.exports = router;