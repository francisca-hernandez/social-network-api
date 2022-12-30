const { Thought, User } = require('../models');



//get all thoughts //Used module 18.2.5for guidance on the below functions

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        req.params.userId //is this right?
        res.json(thoughts);
    } catch (err) {
        res.status(400).json({ err }); 
    }
};

//get one thought
const getOneThought = async (req, res) => {
    try {
       const oneThought = await Thought.findById(
        req.params.thoughtId
       );
       res.json(oneThought);
    } catch (err) {
        res.status(400).json({ err}); 
    }
};

//create one thought
const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
      req.params.userId,
      {
        $addToSet: {
          thoughts: createThought._id
        }
      }
    
    res.send('Thought Added')
  } catch (err) {
    res.status(400).json({ err });
  }
};


// update thought
const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { ...req.body },
      { new: true }
    );
    res.json(updatedThought)
  } catch (err) {
    res.status(400).json({ err });
  }
};

//delete thought //see section 18.1.6 for help
const deleteThought = async (req, res) => {
  try {
    const deleteThoughts = await Thought.findByIdAndDelete(
      req.params.thoughtId
    );
    res.send('Thought Deleted')
  } catch (err) {
    res.status(400).json({ err });
  }
};

// const addReaction = async (req,res) => {
//   try {
//     const newReactions = await Thought.findOneAndUpdate(
//       { _id: req.params.thoughtId },
//       {
//         $addToSet: {
//           reactions: req.body
//         }
//       },
//
//     )
//     res.json(newReactions);
//   } catch (err) {
//     res.status(400).json({ err });
//   }
// };

const deleteReaction = async (req, res) => {
  try {
    const deletedReaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        pull: {
          reactions: { reactionId: req.params.reactionId }
        }
      },
      { new: true },
    )
    res.send('Reaction Deleted!')
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = {
   
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    // addReaction,
    deleteReaction
}