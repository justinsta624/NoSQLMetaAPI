// Importing the 'express' module and creating a router instance
const router = require('express').Router();

// Importing specific controller functions for thought operations from the 'thought-controller' file
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// Defining routes for the '/api/thoughts' endpoint

// Handling GET and POST requests for '/api/thoughts'
router
  .route('/')
  .get(getAllThought)   // GET request for retrieving all thoughts
  .post(createThought); // POST request for creating a new thought

// Handling GET, PUT, and DELETE requests for '/api/thoughts/:id'
router
  .route('/:id')
  .get(getThoughtById)   // GET request for retrieving a thought by ID
  .put(updateThought)    // PUT request for updating a thought by ID
  .delete(deleteThought); // DELETE request for deleting a thought by ID

// Handling POST request for creating a reaction on a specific thought
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

// Handling DELETE request for deleting a reaction on a specific thought
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

// Exporting the router for use in other parts of the application
module.exports = router;