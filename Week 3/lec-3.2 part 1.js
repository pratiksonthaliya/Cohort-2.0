// fetch -> fn in browser/runtime -> which lets you fetch data from backend/api

// Until now, we’ve sent requests in 2 ways:
// 1. postman
// 2. browser url bar
// 3. using fetch

// Lets say I ask you create an HTML page where
// 1. You can see the names of 10 people
// 2. You need to make sure you get these data from an API call

// -->  GET https://fakerapi.it/api/v1/persons

// // // >>>>>> Project for today -
// Let people sign up to your website
// Only allow signed in users to see people (create a dummy people list)

// Before we get into authentication
// Lets understand some cryptography jargon

// 1. Hashing -> convert password to some random jibris
// // 1. Hashing is one way
// // 2. Given the output, no one can find out the input
// // 3. Changing the input a lil bit changes the output by a lot

// 2. Encryption
// // 1. Encryption is two way
// // 2. A string is encrypted using a password
// // 3. String can be decrypted using the same password

// 3. Json web tokens - takes json as input and creates a token
// // conversion of jwt to json can any one can do using jwt.io, but verification will be done by original website only
// // 1. Its neither of encryption or hashing (its technically a digital signature)
// // 2. Anyone can see the original output given the signature
// // 3. Signature can be verified only using the password

// 4. Local storage -  A place in your browser where you can store some data. jwt are stored there.
// // Usually things that are stored include -
// // 1. Authentication tokens
// // 2. User language preference
// // 3. User theme preference

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log(decoded);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
      users: ALL_USERS.filter(function (value) {
        if (value.username === username) {
          return false;
        } else return true;
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);

// JWT to create tokens
// User gets back a token after the signin request
// User sends back tokens in all authenticated requests
