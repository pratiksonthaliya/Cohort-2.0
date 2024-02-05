// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter(i) {
  const intervalId = setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
let stopAfter = 10;
for (let i = 0; i < stopAfter; i++) {
  counter(i); // This will stop the counter after 10 iterations
}
