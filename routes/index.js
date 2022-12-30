//Routes
const userRoutes = require('./apiRoutes/userRoutes');
const thoughtRoutes = require('./apiRoutes/thoughtRoutes');
const router = require('express').Router();


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;