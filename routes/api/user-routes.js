// Importing the 'express' module and creating a router instance
const router = require('express').Router();

// Importing specific controller functions for user operations from the 'user-controller' file
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// Setting up routes for the '/api/users' endpoint

// Handling GET and POST requests for '/api/users'
router
  .route('/')
  .get(getAllUser)   // GET request for retrieving all users
  .post(createUser); // POST request for creating a new user

// Handling GET, PUT, and DELETE requests for '/api/users/:id'
router
  .route('/:id')
  .get(getUserById)   // GET request for retrieving a user by ID
  .put(updateUser)    // PUT request for updating a user by ID
  .delete(deleteUser); // DELETE request for deleting a user by ID

// Handling POST and DELETE requests for managing friends under '/api/users/:userId/friends/:friendId'
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)    // POST request for adding a friend to a user
  .delete(deleteFriend); // DELETE request for removing a friend from a user

// Exporting the router for use in other parts of the application
module.exports = router;