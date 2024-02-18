// Importing the mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Array of usernames for random selection
const usernames = [
    'KylianMbappe', 'ErlingHaaland', 'JudeBellingham', 'KevinDeBruyne', 'LionelMessi', 'ChristianoRonaldo',
    'RobertLewandowski', 'Jorginho', 'NGoloKante', 'MohamedSalah', 'KarimBenzema', 'HarryKane',
    'JackGrealish', 'SadioMane', 'SonHeungmin', 'LeeKangin', 'FlorianWirtz', 'AlexGrimaldo',
    'PhilFoden', 'JamalMusiala', 'JeremyFrimpong', 'KuboTakefusa', 'MehdiTaremi', 'Endrick'
];

// Array of thoughts for random selection
const thoughts = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is what happens when you're busy making other plans.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Do not wait for leaders; do it alone, person to person.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only person you are destined to become is the person you decide to be.",
    "Don't count the days, make the days count.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success usually comes to those who are too busy to be looking for it.",
    "It's not whether you get knocked down, it's whether you get up.",
    "The only place where success comes before work is in the dictionary.",
    "You miss 100% of the shots you don't take.",
    "Dream big, work hard, stay focused.",
    "You can't have a better tomorrow if you're still thinking about yesterday.",
    "The best way to predict the future is to create it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Strive not to be a success, but rather to be of value.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Success is not in what you have, but who you are.",
    "The journey of a thousand miles begins with one step.",
    "The harder I work, the luckier I get.",
    "Your attitude determines your direction.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not just about making money. It's about making a difference.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is what happens when you're busy making other plans.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Do not wait for leaders; do it alone, person to person.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only person you are destined to become is the person you decide to be.",
    "Don't count the days, make the days count.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success usually comes to those who are too busy to be looking for it.",
    "It's not whether you get knocked down, it's whether you get up.",
    "The only place where success comes before work is in the dictionary.",
    "You miss 100% of the shots you don't take.",
    "Dream big, work hard, stay focused.",
    "You can't have a better tomorrow if you're still thinking about yesterday.",
    "The best way to predict the future is to create it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Strive not to be a success, but rather to be of value.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Success is not in what you have, but who you are.",
    "The journey of a thousand miles begins with one step.",
    "The harder I work, the luckier I get.",
    "Your attitude determines your direction.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not just about making money. It's about making a difference.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is what happens when you're busy making other plans.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Do not wait for leaders; do it alone, person to person.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only person you are destined to become is the person you decide to be.",
    "Don't count the days, make the days count.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success usually comes to those who are too busy to be looking for it.",
    "It's not whether you get knocked down, it's whether you get up.",
    "The only place where success comes before work is in the dictionary.",
    "You miss 100% of the shots you don't take.",
    "Dream big, work hard, stay focused.",
    "You can't have a better tomorrow if you're still thinking about yesterday.",
    "The best way to predict the future is to create it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Strive not to be a success, but rather to be of value.",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Success is not in what you have, but who you are.",
    "The journey of a thousand miles begins with one step.",
    "The harder I work, the luckier I get.",
    "Your attitude determines your direction.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Success is not just about making money. It's about making a difference.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is what happens when you're busy making other plans.",
];

// Function to get a random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to get a random username from the 'usernames' array
const getRandomUsername = () =>
    getRandomArrItem(usernames);

// Function to generate random thoughts given a count 'int'
const getRandomThoughts = (int) => {
    const results = [];
    const usedIndexes = new Set(); // Keep track of used indexes
    let attempts = 0; // To prevent infinite loop in case int is larger than thoughts.length
    while (results.length < int && attempts < thoughts.length * 2) {
        const index = Math.floor(Math.random() * thoughts.length);
        if (!usedIndexes.has(index)) {
            const thoughtText = thoughts[index];
            const newThought = {
                _id: new mongoose.Types.ObjectId(),
                thoughtText: thoughtText,
            };
            usedIndexes.add(index);
            results.push(newThought);
        }
        attempts++;
    }
    return results;
};

// Exporting the functions for use in other files (seed.js)
module.exports = { getRandomUsername, getRandomThoughts };