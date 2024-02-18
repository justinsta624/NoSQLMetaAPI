const { connect, connection } = require('mongoose');

// Connecting to the MongoDB database, either using the environment variable MONGODB_URI or a local database named 'NoSQLMetaAPI'
const connectionString =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/NoSQLMetaAPI';

connect(connectionString);

// Export connection 
module.exports = connection;