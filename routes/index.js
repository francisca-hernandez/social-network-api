// const express = require('express');
const router = require('express').Router();

//Routes
const userRoutes = require('./apiRoutes/userRoutes');
const thoughtRoutes = require('./apiRoutes/thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;