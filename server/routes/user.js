const { loginUser, registerUser } = require('../controllers/user');
const express = require('express');
const router = express.Router();

// Define routes and bind them to controller functions
router.post('/signup', registerUser);
router.post('/signin', loginUser);

const userRoutes = router;
module.exports = userRoutes;