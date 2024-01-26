// // Loops
let sum = 0;
for (var i = 0; i < 25; i++) {
  sum += i;
}
console.log(sum);

// // Functions -> DRY
// A fn in js is a set of statements that performs a task or calculates a value.
// It should take some input and return an output where there is some obvious relationship b/w the input and output
function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  console.log(ans);
}
findSum(67);

// // Callbacks -> DRY for functions
// Pssing function as argument
function square(a) {
  return a * a;
}
function cube(a) {
  return a * a * a;
}

// DRY
function sumOfSquare(a, b) {
  const val1 = square(a);
  const val2 = square(b);
  return val1 + val2;
}
function sumOfCube(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);
  return val1 + val2;
}

function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);
  return val1 + val2;
}
let ans1 = sumOfSomething(4, 7, square);

// // Anonymous Functions
let ans2 = sumOfSomething(4, 7, function (a) {
  return a * a * a;
});

console.log(ans1, ans2);
