// Importing the User and Thought models from the '../models' directory
const { User, Thought } = require('../models');

// Creating an object to store various functions related to user operations
const userController = {
    // Function to get all users
    getAllUser(req, res) {
        User.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Function to get a user by their ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Invalid id: no match with the user' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Function to create a new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // Function to update a user by their ID
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Invalid id: no match with the user' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    // Function to delete a user by their ID, including deleting associated thoughts
    deleteUser({ params }, res) {
        Thought.deleteMany({ userId: params.id })
            .then(() => {
                User.findOneAndDelete({ _id: params.id })
                    .then(dbUserData => {
                        if (!dbUserData) {
                            res.status(404).json({ message: 'Invalid id: no match with the user' });
                            return;
                        }
                        res.json(dbUserData);
                    });
            })
            .catch(err => res.json(err));
    },

    // Function to add a friend to a user's friends list
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Invalid id: no match with the user' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => res.status(400).json(err));
    },

    // Function to delete a friend from a user's friends list
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'Invalid id: no match with the user' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => res.status(400).json(err));
    }
};

// Exporting the userController object for use in other parts of the application
module.exports = userController;