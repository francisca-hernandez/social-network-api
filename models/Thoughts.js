//section 18.2.4 of module for guidance

const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => {
            return new Types.ObjectId();
        }
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 200
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
            if (date) return date.toISOString().split("T")[0]; //double check if correct
        },
    },
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxLength: 200
    },
  
    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = model('Thought', thoughtSchema);
