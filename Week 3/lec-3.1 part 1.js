const express = require("express");

const app = express();

// Two pre-checks happens that a website does
// ->  Authentication and Input Validation  -->> done using Middlewares

app.get("/health-checkup", (req, res) => {
  // do health checks here
  res.send("Your heart is healthy");
});

// Before we proceed, lets add constraints to our route
// 1. User needs to send a kidneyId as a query param which should be a number from 1-2 (humans only has 2 kidneys)
// 2. User should send a username and password in headers

//UGLY VERSION
app.get("/health-checkup", (req, res) => {
  // do health checks here
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "harkirat" || password != "pass") {
    res.send(403).json({
      msg: "User doesn't exists",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.send(411).json({
      msg: "Wrong Input",
    });
    return;
  }
  // do something with kidney here
  res.send("Your heart is healthy");
});

app.listen(3000, () => {
  console.log("server is running at 3000 port");
});

// What if I tell you to introduce another route that does
// Kidney replacement - Inputs need to be the same
// Slightly better solution - Create wrapper fns

function usernameValidation(username, password) {
  if (username != "harkirat" && password != "pass") {
    return false;
  }
  return true;
}
function kidneyValidation(kidneyId) {
  if (kidneyId != 1 && kidneyId != 2) {
    return false;
  }
  return true;
}
app.get("/health-checkup", (req, res) => {
  // do health checks here
  const kidneyId = req.query.kidneyId;

  if (!usernameValidation(req.query.username, req.query.password)) {
    res.status(403).json({
      msg: "User doesn't exist",
    });
    return;
  }
  if (!kidneyValidation(kidneyId)) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
  // do something with kidney here
  res.send("Your heart is healthy");
});
app.post("/health-checkup", (req, res) => {
  // do health checks here
  const kidneyId = req.query.kidneyId;

  if (!usernameValidation(req.query.username, req.query.password)) {
    res.status(403).json({
      msg: "User doesn't exist",
    });
    return;
  }
  if (!kidneyValidation(kidneyId)) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
  // do something with kidney here
  res.send("Your heart is healthy");
});
app.listen(3001, () => {
  console.log("server is running at 3001 port");
});

// // app.get() -> real syntax
app.get(
  "/",
  function (req, res, next) {
    console.log("hi from req 1");
    next();
  },
  function (req, res, next) {
    console.log("hi from req 2");
    next();
  },
  function (req, res) {
    console.log("hi from req 3");
    res.send("hello world");
  }
);
app.listen(3002);

//Best solution - middleware

app.use(express.json());
//body behaves slightly different as compared to headers , query b/c we don't know which type od data body has json, raw, txt, html, js, etc
app.use(userMiddleware);
//-> it means that this middleware will be called everywhere/route

async function middleware2(req, res, next) {
  // await fetch();
  // next();
  fetch().then(() => {
    next();
  });
}

function userMiddleware(req, res, next) {
  if (req.headers.username != "harkirat" && req.headers.password != "pass") {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}
function kidneyMiddleware(req, res, next) {
  if (req.query.kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

app.get(
  "health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    // do something with kidney here
    res.send("Your health is good");
  }
);

app.get("kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
  // do something with kidney here
  res.send("Your kidney is healthy");
});

app.get("heart-checkup", userMiddleware, function (req, res) {
  // do something with kidney here
  res.send("Your heart is healthy");
});

// //  Other use cases of middleware (assignment) =

// 1. Count the number of requests -> count the load on the server

let numberOfRequests = 0;
function calculateRequests(req, res, next) {
  numberOfRequests++;
  next();
}
app.get("kidney-check", calculateRequests, userMiddleware, function (req, res) {
  // do something with kidney here
  res.send("Your kidney is healthy");
});
app.get(
  "heart-checkup",
  calculateRequests,
  userMiddleware,
  function (req, res) {
    // do something with kidney here
    res.send("Your heart is healthy");
  }
);

// 2. Find the average time your server is taking to handle requests
