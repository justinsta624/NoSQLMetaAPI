// Importing the 'connect' and 'connection' objects from the 'mongoose' library
const { connect, connection } = require('mongoose');

// Defining the MongoDB connection string. It uses the environment variable MONGODB_URI if available, otherwise defaults to a local database named 'NoSQLMetaAPI'
const connectionString =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/NoSQLMetaAPI';

// Connecting to the MongoDB database using the specified connection string
connect(connectionString);

// Exporting the 'connection' object to make it available for use in other parts of the application
module.exports = connection;