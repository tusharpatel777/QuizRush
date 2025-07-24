// const express = require('express');
// const router = express.Router();
// const {
//   createQuiz,
//   getAllQuizzes,
//   getQuizById,
//   submitQuiz,
// } = require('../controllers/quizController');
// const { protect } = require('../middleware/authMiddleware');

// router.route('/').post(protect, createQuiz).get(getAllQuizzes);
// router.route('/:id').get(getQuizById);
// router.route('/:id/submit').post(submitQuiz);

// module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz, // Import new function
  deleteQuiz, // Import new function
  submitQuiz,
} = require('../controllers/quizController');
const { protect } = require('../middleware/authMiddleware');

// Route for getting all quizzes and creating a new one
router.route('/')
  .get(getAllQuizzes)
  .post(protect, createQuiz);

// Route for getting, updating, and deleting a single quiz by its ID
router.route('/:id')
  .get(getQuizById)
  .put(protect, updateQuiz)    // Add this line for updates
  .delete(protect, deleteQuiz); // Add this line for deletes

// Route for submitting a quiz
router.route('/:id/submit')
  .post(submitQuiz);

module.exports = router;