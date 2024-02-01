// // map, filter, arrow functions

// arrow functions
function sum(a, b) {
  return a + b;
}
const sum = (a, b) => {
  return a + b;
};

app.get("/", function (req, res) {});
app.get("/", (req, res) => {});

// Map
const arr = [1, 2, 3, 4, 5];
const ans = [];
for (var i = 0; i < arr.length; i++) {
  ans.push(arr[i] * 2);
}
console.log(ans);
//using map
function transform(i) {
  return 2 * i;
}
const ans2 = arr.map(transform);
console.log(ans2);

//Filter
const arr2 = [1, 2, 3, 4, 5];
const ans3 = [];
for (var i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    ans3.push(arr2[i]);
  }
}
console.log(ans3);
//using filter
function filtering(i) {
  return i % 2 === 0;
}
const ans4 = arr.filter(filtering);
console.log(ans4);

const ans5 = arr.filter((i) => {
  return 2 * i === 0;
});

//Q1
const arra = ["harkirat", "raman", "parash"];
const ans7 = arra.filter(function (n) {
  if (n.startsWith("h")) {
    return true;
  } else return false;
});
console.log(ans7);
