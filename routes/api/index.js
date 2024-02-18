// Importing the 'express' module and creating a router instance
const router = require('express').Router();

// Importing the user and thought routes from separate files
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Using the imported user routes under the '/api/users' endpoint
router.use('/users', userRoutes);

// Using the imported thought routes under the '/api/thoughts' endpoint
router.use('/thoughts', thoughtRoutes);

// Exporting the router for use in other parts of the application
module.exports = router;