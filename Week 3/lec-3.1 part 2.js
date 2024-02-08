// Why do you need input validation?
//  What if the user sends the wrong body?
// app crashes and end client can see through backend logic ->> bad for the company

const express = require("express");

const app = express();

app.use(express.json()); //checks this middleware for all the route

app.post("/health-checkup", function (req, res) {
  // do something with kidney here
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  console.log("your kidney length is " + kidneyLength);
  res.send("your kidney length is " + kidneyLength);
});

//ugly way
app.post("/health-checkup", function (req, res) {
  // do something with kidney here
  const kidneys = req.body.kidneys;
  if (!kidneys) {
    res.json({
      msg: "wrong inputs",
    });
  } else {
    const kidneyLength = kidneys.length;
    console.log("your kidney length is " + kidneyLength);
    res.send("your kidney length is " + kidneyLength);
  }
});

//any time if an exception occured
//global catches -> at the end -> runs if all the above didn't ran for a certain hit
// it is a error based middleware
// Global catches help you give the user a Better error message
app.use(function (error, req, res, next) {
  console.log(error); //log the error for debugging
  res.status(500).send("An internal server error occured");
});

app.listen(4000, () => {
  console.log("server is working at 4000 port");
});

// How can you do better input validation? -> ZOD
// as comparing normal values are very hard to scale -> we can use zod here
// input validation libries -> most famous one is ZOD
// Schema validation

const express = require("express");
const z = require("zod");
// const app = express();

app.use(express.json());

const schema = z.array(z.number);

app.post("/health-checkup", function (req, res) {
  // do something with kidney here
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys); //
  if (!response.success) {
    //
    res.status(411).json({
      msg: "wrong inputs",
    });
  } else {
    const kidneyLength = kidneys.length;
    console.log("your kidney length is " + kidneyLength);
    res.send("your kidney length is " + kidneyLength);
  }
});

const kidneysInput = z.literal("1").or(z.literal("2"));

app.post("/health-checkup", function (req, res) {
  // do something with kidney here
  const kidneyId = req.body.kidneyId;
  const validation = kidneysInput.safeParse(kidneyId); //
  if (!validation.success) {
    res.send("incorrect input");
    return;
  }
  res.send("your kidney id is " + kidneyId);
});

// use ZOD for input validation
// {
//     email: string => email
//     password: atleast 8 letters
//     country: "IN", "US"
// }

const schema1 = z.object({
  email: z.string(),
  password: z.string(),
  country: z.literal("IN").or(z.literal("US")),
});

// schema1.safeParse() ->> to call
//eg2
function validateInput(obj) {
  const schema2 = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}

app.post("login", (req, res) => {
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({
      msg: "your inputs are invalid",
    });
    return;
  }
});

// // Authentication

// As you can tell by now, anyone can send requests to your backend.
// They can just go to postman and send a request.
// How do you ensure that this user has access to a certain resource?

// Dumb way - Ask user to send username and password in all requests as headers

// Slightly better way -
// 1. Give the user back a token on signup/signin
// 2. Ask the user to send back the token in all future requests
// 3. When the user logs out, ask the user to forget the token (or revoke it from the backend)

// Library we need to get comfortable in - jsonwebtokens

// // // -> Order: Initial Middlewares -> all routes -> global catches
