const express = require('express');
const router = express.Router();

//Routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// middleware function
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;