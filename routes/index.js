// Importing the 'express' module and creating a router instance
const router = require('express').Router();

// Importing API routes from the 'api' directory
const apiRoutes = require('./api');

// Using the imported API routes under the '/api' endpoint
router.use('/api', apiRoutes);

// Handling any other requests that don't match the defined routes with a 404 error response
router.use((req, res) => {
  res.status(404).send('Error has been occurred');
});

// Exporting the router for use in other parts of the application
module.exports = router;