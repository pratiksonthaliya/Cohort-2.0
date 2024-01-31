//synchronous fn
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

// Async nature -> setTimeout, fs.readFile, fetch api
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); //async fn
console.log("hello world");

//file system module
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});
console.log("hi there");

// // Promises -> syntactical sugar to write

//ugly way
// const fs = require("fs");
//my async fn -> wrapper on my async fn
function pratiksReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}
// callback fn to call
function onDone1(data) {
  console.log(data);
}
pratiksReadFile(onDone1);

//Promises
function pratikReadFile() {
  return new Promise(function (resolve) {
    //write async fn here
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
//callback to call
function onDone2(data) {
  console.log(data);
}
// pratikReadFile().then(onDone2);
var a = pratikReadFile();
a.then(onDone2);

// // Async Await
function pratik1ReadFile() {
  let p = new Promise(function (resolve) {
    //write async fn here
    setTimeout(function () {
      resolve("hi hye");
    }, 2000);
  });
  return p;
}
async function main() {
  // used on caller side
  // no callbacks, no .then syntax
  const val = await pratik1ReadFile();
  console.log(val);
}
main();
