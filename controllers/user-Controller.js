// const { User } = require('../models/User');
const { User } = require('../models');


//get all users 
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
};


//get one user
const getOneUser = async (req, res) => {
    try {
        const oneUser = await User.findById(
            req.params.userId,
        )
        res.json(oneUser)
    } catch (error) {
        res.status(500).json({ error });
    }
};


//create user
const createUser = async (req, res) => {
    try {
        const newUser = await User.create({
            ...req.body
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error });
    }
};


// //delete user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(
            req.params.userId,
            { new: true }
        )
        res.send('User was deleted');
    } catch (error) {
        res.status(500).json({ error });
    }
}



//update user
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { ...req.body },
            { new: true }
        );
        res.json(updatedUser)
    } catch (error) {
        res.status(500).json({ error });
    }
};


// refer to section 18.16 in homework Modules for the below 

// add Friend 
const addFriend = async (req, res) => {
    try {
        const addedFriend = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $addToSet: {
                    friends: req.params.friendId
                }
            }
        )
        res.send('Friend added');
    } catch (error) {
        res.status(500).json({ error });
    }
}





// remove a Friend 
const removeFriend = async (req, res) => {
    try {
        const removedFriend = await User.findByIdAndUpdate(
            req.params.userId,
            {
                $pull: {
                    friends: req.params.friendId
                }
            }
        )
        res.send('Friend removed');
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = {
    getAllUsers, 
    getOneUser, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend, 
    removeFriend 

}

