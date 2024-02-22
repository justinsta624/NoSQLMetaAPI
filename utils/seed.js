// Importing the 'connection' object from the '../config/connection' file
const connection = require('../config/connection');

// Importing the 'User' and 'Thought' models from the '../models' file
const { User, Thought } = require('../models');

// Importing the 'getRandomUsername' and 'getRandomThoughts' functions from the './data' file
const { getRandomUsername, getRandomThoughts } = require('./data');

// Async function to seed the database, takes a callback parameter for signaling completion
const seedDatabase = async (callback) => {

  // Event listener for errors in the MongoDB connection
  connection.on('error', (err) => err);

  // Event listener for when the MongoDB connection is open
  connection.once('open', async () => {
    console.log('connected');

    // Delete the 'users' and 'thoughts' collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thoughts');
    }

    // Create empty arrays to hold user and thought data
    const users = [];
    const thoughts = [];

    // Get the array of usernames from data.js
    const usernames = [
      'KylianMbappe', 'ErlingHaaland', 'JudeBellingham', 'KevinDeBruyne', 'LionelMessi', 'ChristianoRonaldo',
      'RobertLewandowski', 'Jorginho', 'NGoloKante', 'MohamedSalah', 'KarimBenzema', 'HarryKane',
      'JackGrealish', 'SadioMane', 'SonHeungmin', 'LeeKangin', 'FlorianWirtz', 'AlexGrimaldo',
      'PhilFoden', 'JamalMusiala', 'JeremyFrimpong', 'KuboTakefusa', 'MehdiTaremi', 'Endrick'
    ];

    // Loop through usernames, generate thoughts, and add data to users and thoughts arrays
    for (let i = 0; i < usernames.length; i++) {
      const username = usernames[i];

      // Generate random thoughts for each user
      const userThoughts = getRandomThoughts(3, username);

      // Add user thoughts to the thoughts array
      thoughts.push(...userThoughts);

      // Add user data to the users array
      users.push({
        username: username,
        thoughts: userThoughts.map(thought => thought._id),
      });
    }

    // Insert users into the 'users' collection
    await User.collection.insertMany(users);

    // Insert thoughts into the 'thoughts' collection
    await Thought.collection.insertMany(thoughts);

    // Log the seeded data to the console
    console.table(users);
    console.table(thoughts);
    console.info('Successfully Seeded!');

    // Invoke the provided callback function if it's a function
    if (typeof callback === 'function') {
      callback();
    }
  });
};

// Call the seedDatabase function
seedDatabase();