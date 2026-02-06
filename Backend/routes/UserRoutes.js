const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('./../controllers/UserControllers');

const { login } = require('./../controllers/AuthController');
const authMiddleware = require('./../middleware/AuthMiddleware');

// Auth Routes
router.post('/register', createUser);
router.post('/login', login);

// Protected Route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: "Protected route",
    user: req.user
  });
});

// CRUD Routes
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
