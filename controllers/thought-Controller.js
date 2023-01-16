const { Thought, User } = require('../models');

//get all thoughts //Used module 18.2.5for guidance on the below functions
//methods
const getAllThoughts = async(req, res) => {
  try {
      const thoughts = await Thought.find();
      console.log(thoughts);
      res.json(thoughts);
  } catch (error) {
      res.status(400).json({ error });
  }
};

//get one thought
const getOneThought = async (req, res) => {
  try {
      const singleThought = await Thought.findById(
          req.params.thoughtId,
      )
      res.json(singleThought);
  } catch (error) {
      res.status(400).json({ error });  
  }
};

//create one new thought
const newThought = async (req, res) => {
  try {
      const addThought = await Thought.create(
          req.body
      )
      const thoughtArr = await User.findByIdAndUpdate(
          req.params.userId,
          {
              $addToSet: {
                  thoughts: addThought._id
              }
          }
      )
      res.send('Your Thought has Been Added')
  } catch (error) {
      res.status(400).json({ error });  
  }
}




//delete thought //see section 18.1.6 for help
const deleteThought = async (req, res) => {
  try {
      const deleteThought = await Thought.findByIdAndDelete(
         req.params.thoughtId 
      )
      res.send('Deleted')
  } catch (error) {
      res.status(400).json({ error }); 
  }
}

// update thought
const updateThought = async (req, res) => {
  try {
      const updateaThought = await Thought.findByIdAndUpdate(
          req.params.thoughtId,
          { ...req.body },
          { new: true }
      );
      res.json(updateaThought)
  } catch (error) {
      res.status(400).json({ error }); 
  }
}


// const addReaction
  const addReaction = async (req, res) => {
    try {
        const newReaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {
                $addToSet: {
                    reactions: req.body
                }
            },
            { new: true }
        )
        res.json(newReaction);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });  
    }
}

// //delete a reaction
// //delet thought var
// const deleteReaction = async (req, res) => {
//   try {
//       const deleteaReaction = await Thought.findOneAndUpdate(
//           { _id: req.params.thoughtId },
//           {
//               $pull: { reactions: {reactionId: req.params.reactionId} }
//           },
//           { new: true},
//       )
//       res.send('Your Reaction Deleted')
//   } catch (error) {
//       res.status(400).json({ error }); 
//   }


// }

module.exports = { getAllThoughts, 
                  getOneThought, 
                  newThought, 
                  deleteThought, 
                  updateThought,
                  addReaction,
                  // deleteReaction,
              }
