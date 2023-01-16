
const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    newThought,
    updateThoughts,
    deleteThought,
    addReaction,
    // deleteReaction,
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    

router
    .route('/user/:userId')
    .post(newThought)

router
    .route('/:thoughtId')
    .get(getOneThought)
    .delete(deleteThought)
    .put(updateThoughts)
    

router
    .route('/:thoughtId/reaction')
    .post(addReaction)


    
router
    .route('/:thoughtId/:reactionId')
    // .delete(deleteReaction)

module.exports = router;