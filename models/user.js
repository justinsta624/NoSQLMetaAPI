// Importing required modules from Mongoose for defining schemas and models
const { Schema, model } = require('mongoose');
// Importing the 'moment' library for date formatting
const moment = require('moment');

// Defining the User schema
const UserSchema = new Schema({
    // Username field, a unique, required string with trimming
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    // Email field, a required string with a unique pattern matching an email format
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    // Array of Thought IDs associated with the user, using the 'ref' property to reference the 'Thought' model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // Array of User IDs representing friends, using the 'ref' property to reference the 'User' model
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    // Additional schema options
    {
        // Configuring toJSON options for virtuals
        toJSON: {
            virtuals: true
        },
        // Disabling the inclusion of 'id' as a virtual
        id: false
    });

// Defining a virtual property 'friendCount' for the User schema
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Creating the User model using the UserSchema
const User = model('User', UserSchema);

// Exporting the User model for use in other parts of the application
module.exports = User;