// Importing the 'User' model from the './User' file
const User = require('./User');
// Importing the 'Thought' model from the './Thought' file
const Thought = require('./Thought');

// Exporting an object containing both the 'User' and 'Thought' models
module.exports = { User, Thought };