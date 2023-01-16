// const express = require('express');

//Routes --> goes in apRoutes index.js
// const userRoutes = require('./apiRoutes/userRoutes');
// const thoughtRoutes = require('./apiRoutes/thoughtRoutes');

const apiRoutes = require('./apiRoutes');
const router = require('express').Router();

router.use('/api', apiRoutes);

module.exports = router;