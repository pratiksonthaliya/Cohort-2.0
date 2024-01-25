//// Simple Primitives -
// 1. Write the program to greet a person given their first and last name
var fname = "Ram";
var lname = "kumar";
console.log("Good Morning,", fname, lname);

// 2. Write a program that greets a person based on their gender. (If else)
var gender = "male";
if (gender === "male") {
  console.log("Good Morning, Mr", fname, lname);
} else {
  console.log("Good Morning, Miss", fname, lname);
}

// 3. Write a program that counts from 0 - 1000 and prints (for loop)
var ct = 0;
for (var i = 0; i <= 1000; i++) {
  ct++;
  //   console.log(i);
}
console.log("count is", ct);

//// Complex Primitives - Arrays, Objects
// 1. Write a program prints all the even numbers in an array
var arr = [2, 6, 45, 6476, 8767, 83, 8, 27882, 28];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(i);
  }
}

// 2. Write a program to print the biggest number in an arrya
var maxi = -1;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > maxi) {
    maxi = arr[i];
  }
}
console.log("Maximum : ", maxi);

// 3. Write a program that prints all the male people’s first name given a complex object
var obj = [
  {
    fname: "Rama",
    gender: "male",
  },
  //   ....
];
for (var i = 0; i < obj.length; i++) {
  if (obj[i].gender === "male") {
    console.log(obj[i].fname);
  }
}

// 4. Write a program that reverses all the elements of an array
for (var i = 0; i < arr.length / 2; i++) {
  var temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

//Functions
// 1. Write a function that finds the sum of two numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 6));

// 2. Write another function that displays this result in a pretty format
function displayResult(data) {
  console.log("Result of sum is: ", data);
}
displayResult(sum(8, 7));

// 3. Write another function that takes this sum and prints it in passive tense
function displayResultPassive(data) {
  console.log(`Sum's result is: `, data);
}
displayResultPassive(sum(8, 7));

//Bounty Problem
let res = 0;
for (let i = 0; i < 10000000000; i++) {
  res = res + i;
}
console.log(res);
// js(node) is single threaded and if very heavy code is thrown,run like this one then it uses 100% capacity of a single core only.
