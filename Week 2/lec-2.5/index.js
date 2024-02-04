const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// app.use(bodyParser.json());
app.use(express.json());

// in memory database
let users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

const port = 3000;

//query parameters -> to take input
app.get("/", function (req, res) {
  const johnsKidneys = users[0].kidneys;
  //   console.log(`John has ${johnsKidneys.length} kidneys`);

  let numberOfKidneys = johnsKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnsKidneys.length; i++) {
    if (johnsKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  //   const healthy = johnsKidneys.filter((i) => {
  //     return i.healthy === true;
  //   });
  //   console.log(healthy.lenth);

  res.json({ numberOfKidneys, numberOfHealthyKidneys });
});

// send data in body
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.send({ msg: "Done!!" });
});

app.put("/", function (req, res) {
  let atLeastOneUnhealthy = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy === false) {
      atLeastOneUnhealthy = true;
    }
    users[0].kidneys[i].healthy = true;
  }
  if (!atLeastOneUnhealthy) {
    res.status(411).json({ msg: "you have all heakthy kidneys" });
  }
  res.send({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  let atLeastOneUnhealthy = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy === true) {
      newKidneys.push(users[0].kidneys[i]);
    } else atLeastOneUnhealthy++;
  }

  if (atLeastOneUnhealthy === 0) {
    res.status(411).json({ msg: "you have no bad kidney" });
  }

  users[0].kidneys = newKidneys;
  res.send({ msg: "done!!" });
});

app.listen(3000, () => {
  console.log(`Hospital app listening on port ${port}`);
});
