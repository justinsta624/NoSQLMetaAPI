// Importing the necessary modules: express for building the server and mongoose for MongoDB interaction
const express = require('express');
const db = require('./config/connection');
const mongoose = require('mongoose');
const moment = require('moment');

// Creating an instance of the express application
const app = express();

// Setting the port to either the environment variable PORT or 3001 if the environment variable is not set
const PORT = process.env.PORT || 3001;

// Adding middleware to parse incoming JSON data and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files from the 'public' directory
app.use(express.static('public'));

// Using the routes defined in the './routes' module
app.use(require('./routes'));

// Enabling debugging for mongoose to log database interactions
mongoose.set('debug', true);

// Event listener for when the MongoDB connection is open
db.once("open", () => {
  // Start the express app listening on the specified port
  app.listen(PORT, () => {
    // Log a message indicating successful connection and the listening port
    console.log(`Connected on localhost:${PORT}`);
  });
});