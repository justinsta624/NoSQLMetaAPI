// Importing required modules from Mongoose for defining schemas and models
const { Schema, model, Types } = require('mongoose');
// Importing the 'moment' library for date formatting
const moment = require('moment');

// Defining the Reaction schema
const ReactionSchema = new Schema({
    // Unique identifier for each reaction using ObjectId
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    // Body of the reaction, a required string with a maximum length of 280 characters
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    // Username associated with the reaction, a required string
    username: {
        type: String,
        required: true
    },
    // Creation timestamp for the reaction, with a default value of the current date and time
    createdAt: {
        type: Date,
        default: Date.now,
        // Getter function to format the date using the 'moment' library
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
    // Additional schema options
    {
        // Configuring toJSON options for virtuals and getters
        toJSON: {
            virtuals: true,
            getters: true
        },
        // Disabling the inclusion of 'id' as a virtual
        id: false
    });

// Defining the Thought schema
const ThoughtSchema = new Schema({
    // Body of the thought, a required string with a minimum length of 1 and a maximum length of 280 characters
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    // Creation timestamp for the thought, with a default value of the current date and time
    createdAt: {
        type: Date,
        default: Date.now,
        // Getter function to format the date using the 'moment' library
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    // Username associated with the thought, a required string
    username: {
        type: String,
        required: true
    },
    // Array of Reaction documents associated with the thought, using the ReactionSchema
    reactions: [ReactionSchema]
},
    // Additional schema options
    {
        // Configuring toJSON options for virtuals and getters
        toJSON: {
            virtuals: true,
            getters: true
        },
        // Disabling the inclusion of 'id' as a virtual
        id: false
    });

// Defining a virtual property 'reactionCount' for the Thought schema
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Creating the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// Exporting the Thought model for use in other parts of the application
module.exports = Thought;