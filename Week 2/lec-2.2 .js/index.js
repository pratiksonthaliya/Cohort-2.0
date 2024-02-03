const express = require("express"); //function
const bodyParser = require("body-parser");
const app = express(); // app object

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`<button>click me</button>`);
});

app.post("/conversations", (req, res) => {
  console.log(req.body);
  console.log(req.query.message);
  console.log(req.headers["authorization"]);
  res.send("hola");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// // Create a ToDo application where u store data in a file

// when port -> b/c a pc has a lot of ports so we are defining on whuch port our website should use/render
