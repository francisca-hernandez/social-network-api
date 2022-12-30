
const router = require('express').Router();

const { getAllThoughts, getOneThought, createThought, updateThought, deleteThought, 
 } = require('../../controllers/thought-Controller');

//Thought routes
 router
 .route('/')
 .get(getAllThoughts)
 

router
 .route('/:thoughtId')
 .get(getOneThought)
 .delete(deleteThought)
 .put(updateThought)
 

// router
//  .route('/:thoughtId/reaction')
//  .post(addReaction)

router
 .route('/user/:userId')
 .post(createThought)
 
router
 .route('/:thoughtId/:reactionId')
//  .delete(deleteReaction)

module.exports = router;