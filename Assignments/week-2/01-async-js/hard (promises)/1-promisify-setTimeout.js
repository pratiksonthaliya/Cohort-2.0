/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, n * 1000);
  });
}

wait(2).then(() => {
  console.log("Promise resolved after 2 seconds");
});
module.exports = wait;
