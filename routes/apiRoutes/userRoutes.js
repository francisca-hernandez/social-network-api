
const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,

} =
    require('../../controllers/user-Controller')

//User routes
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:userId')
    .get(getOneUser)
    .put(updateUser)

router
    .route('/user')

module.exports = router;    