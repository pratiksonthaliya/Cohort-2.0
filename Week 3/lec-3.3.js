const express = require("express");

const app = express();

// UGLY WAY
function isOldEnough(age) {
  if (age >= 14) return true;
  else return false;
}
app.get("/ride1", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully riden the ride 1",
    });
  } else {
    res.status(411).json({
      msg: "sorry you are not of age yet",
    });
  }
});

app.get("/ride2", (req, res) => {
  if (isOldEnough(req.query.age)) {
    res.json({
      msg: "You have successfully riden the ride 2",
    });
  } else {
    res.status(411).json({
      msg: "sorry you are not of age yet",
    });
  }
});

// Middle ware method ->
function isOldEnoughMiddleware(req, res, next) {
  if (req.query.age >= 14) {
    next();
  } else {
    res.status(411).json({
      msg: "sorry you are not of age yet",
    });
  }
}

//if you want to make a global middleware bellow the app.use is written
app.use(isOldEnoughMiddleware);

app.get("/ride3", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 3",
  });
});

app.listen(3000, () => {
  console.log("server is running at 3000 port");
});
