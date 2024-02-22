<a ID="readme-top"></a>

<div align="center">
  
# ⭐ NoSQL: Social Network API ⭐

[![Node.js Badge](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![Insomia Badge](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)](https://insomnia.rest/)
[![Express Badge](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![GitHub Badge](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/justinsta624/)

</div>
</div>

## Outcome

Followings are the outcomes of the challenge 18:

* A walkthrough video demonstrating the functionality of the application </br>
<<<<<<< HEAD
[Walk-Through Video: Webm file](https://drive.google.com/file/d/1f6T_ppK0ZiD8IUmP4HiwsjjEfYdfWJu9/view?usp=sharing) </br>
=======
[Walk-Through Video: Webm file](https://drive.google.com/file/d/16s0UV_2l9iDFFiRP6OCrI56S1xTVClTl/view?usp=sharing) </br>
>>>>>>> b6ccae64f1cb98f06963777092a040bafb1d3755

* The URL of the GitHub repository, with a unique name and a README describing the project </br>
[Repository for this challenge](https://github.com/justinsta624/NoSQLMetaAPI)

<div align="center">
  

</div>
</div>

## Table of Contents

- [Description](#description)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Model Structure](#model-structure)
- [Route Structure](#route-structure)
- [Technology Used](#technology-used)
- [Reference](#Reference)
- [License](#license)

## Description

- To build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.
- To have MongoDB installed on your machine. [MongoDB installation guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally.
- Using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages
- Using a JavaScript date library or the native JavaScript `Date` object to format timestamps.
- Create own data using Insomnia after creating API.
- Create a walkthrough video that demonstrates its functionality

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends
to a user’s friend list
```

## Model Structure

**User**:
* `username`
  * String
  * Unique
  * Required
  * Trimmed
* `email`
  * String
  * Required
  * Unique
  * Must match a valid email address (look into Mongoose's matching validation)
* `thoughts`
  * Array of `_id` values referencing the `Thought` model
* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)
---
**Thought**:
* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters
* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query
* `username` (The user that created this thought)
  * String
  * Required
* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`
---
**Reaction** (SCHEMA ONLY)
* `reactionId`
  * Use Mongoose's ObjectId data type
  * Default value is set to a new ObjectId
* `reactionBody`
  * String
  * Required
  * 280 character maximum
* `username`
  * String
  * Required
* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

## Route Structure

**`/api/users`**
* `GET` all users
* `GET` a single user by its `_id` and populated thought and friend data
* `POST` a new user:
```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```
* `PUT` to update a user by its `_id`
* `DELETE` to remove user by its `_id`
**BONUS**: Remove a user's associated thoughts when deleted.
---
**`/api/users/:userId/friends/:friendId`**
* `POST` to add a new friend to a user's friend list
* `DELETE` to remove a friend from a user's friend list
---
**`/api/thoughts`**
* `GET` to get all thoughts
* `GET` to get a single thought by its `_id`
* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```
* `PUT` to update a thought by its `_id`
* `DELETE` to remove a thought by its `_id`
---
**`/api/thoughts/:thoughtId/reactions`**
* `POST` to create a reaction stored in a single thought's `reactions` array field
* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Technology-Used

- **Node.js**: Runtime environment for executing server-side JavaScript code.
- **Express**: Web application framework for building RESTful APIs.
- **MongoDB**: Open-source NoSQL database management system designed to store, retrieve, and manage data in a flexible, scalable, and high-performance manner.
- **Insomnia**: Tool designed for testing and debugging APIs.
- **Nodemon**: Development tool for auto-reloading the server during development.

## Reference

- [GET & POST Routes for retrieving & adding New Data](https://expressjs.com/en/guide/using-middleware.html)
- [Loopback Troubleshooting Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/loopback-issues-with-localhost)
- [Understanding the different types of NoSQL databases](https://www.mongodb.com/databases/types)
- [MongoDB docs on downloading and installing Compass](https://www.mongodb.com/docs/compass/current/install/)
- [MongoDB docs on getting started](https://www.mongodb.com/docs/manual/tutorial/getting-started/)
- [Mongoose docs on getting started](https://mongoosejs.com/docs/index.html)
- [How to meet High-Quality Coding Standards](https://www.freecodecamp.org/news/how-to-write-clean-code/)

## License

For details click on the following link to go to the "LICENSE" file:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=mit)](https://opensource.org/licenses/MIT)

---
© 2024 Hanbyeol Justin Lee. Confidential and Proprietary. All Rights Reserved.
