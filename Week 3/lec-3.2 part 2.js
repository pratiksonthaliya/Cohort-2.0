// Databases

// Until now, we’ve been storing data in memory. This is bad for a few reasons -
// 1. Data can’t be dynamic, if you update in memory objects, the updates are lost if the process restarts
// 2. There are multiple servers in the real world

// In the real world, a basic architecture looks like this
//  User hits the backend -> Backend hits the database
// User doesn’t have access to the database/can’t talk to the DB

// There are various types of databases
// 1. Graph DBs
// 2. Vector DBs
// 3. SQL DBs
// 4. NoSql DBs

// MongoDB lets you create databases
// In each DB, it lets you create tables (collections)
// In each table, it lets you dump JSON data
// It is schemaless
// It scales well and is a decent choice for most use cases

// How to start?
// 1. Create a MongoDB free instance by going to https://mongodb.com/
// 2. Get your mongoldb connection URL
// 3. Download MongoDB Compass and try to explore the DB

// How does the backend connect to the database?
// Using libraries!
// 1. Express lets u create an HTTP server
// 2. Jsonwebtokens library lets you create jwts
// 3. Mongoose lets you connect to your database

//MONGODB URL - mongodb+srv://pratiksonthaliya:<password>@cluster0.f2nqmss.mongodb.net/

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://pratiksonthaliya:<Password>@cluster0.f2nqmss.mongodb.net/"
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function existingUser(username) {
  return await User.findOne({ email: username });
}

app.post("signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  if (existingUser(username)) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  user.save();
  res.json({
    msg: "user created successfully",
  });
});

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   const name = req.body.name;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log(decoded);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
      users: User.find({ username: username }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
