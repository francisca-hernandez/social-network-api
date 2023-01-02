const { User } = require('../models/User');


//get all users 
const getAllUsers = async (req, res) => {
    try {
        const allUser = await User.findById(
            req.params.userId
        );
        res.json(getAllUser);
    } catch (err) {
        res.status(400).json({ err });   
    }
};

//get one user
const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findById(
            req.params.userId
        );
        res.json(oneUser);
    } catch (err) {
        res.status(400).json({ err });   
    }
};

//create user
const createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            ...req.body
        });
        res.json(newUser);
    } catch (err) {
        res.status(400).json({ err });  
    }
};

// //delete user
// const deleteUser = async (req, res) => {
//     try {
//         const removeUser = await User.findByIdAndDelete(
//             req.params.userId,
//             {new: true}e
//         )
//         res.send('User deleted successfully');
//     } catch (err) {
//         res.status(400).json({ err });   
//     }
// };


//update user
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            req.body,
            {new: true}
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ err });  
    }   
};


// refer to section 18.16 in homework Modules for the below 

// const addFriend = async (req, res) => {
//     try {
//         const add = await User.findByIdAndUpdate(
//             req.params.userId,
//             {
//                 $addToSet: {
//                     friends: req.params.friendId
//                 }
//             }
//         )
//         res.send('Added')
//     } catch (err) {
//         res.status(400).json({ err}); 
//     }
// };

// const removeFriend = async (req, res) => {
//     try {
//         const remove = await User.findByIdAndUpdate(
//             req.params.userId,
//             {
//                 $pull: {
//                     friends: req.params.friendId
//                 }
//             }
//         )
//         res.send('Friend Removed')
//     } catch (err) {
//         res.status(400).json({ err }); 
// //     }
// };


module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,

}

