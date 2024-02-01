// function currentTimePrint() {
//   console.log(new Date());
// }
// setInterval(currentTimePrint, 2000);

const { clearInterval } = require("timers");

// 1. Create a counter in Javascript (counts down from 30 to 0)
// let i = 3;
// setInterval(() => {
//   console.log(i);
//   i--;
//   if (i === 0) {
//     clearInterval(int);
//   }
// }, 1000);

// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
const beforeTime = new Date().getSeconds();
setTimeout(() => {
  console.log("hi there");
  //can add afunction here
  const afterTime = new Date().getSeconds();
  console.log(afterTime - beforeTime, "secs");
}, 1465);

// 3. Create a terminal clock (HH:MM:SS)
const time = new Date();
console.log(time.toString().substring(16, 24));
