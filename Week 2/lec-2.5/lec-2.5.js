// const express = require("express");

// const app = express();

// function calculateSum(a, b) {
//   return a + b;
// }

// app.get("/", function (req, res) {
//   const a = req.query.a;
//   const b = req.query.b;
//   const ans = calculateSum(a, b);
//   res.send(ans.toString());
// });

// app.listen(3001, () => {
//   console.log("server is running at 3001 port");
// });

const express = require("express");
const app = express();

function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", function (req, res) {
  // http://localhost:3000/?n=23
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send(` hi your ans is ${ans.toString()}`);
});

app.listen(3000, () => {
  console.log("server is running at 3000 port");
});
