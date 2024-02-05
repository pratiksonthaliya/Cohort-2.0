// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter(stopAfter) {
  let i = 0;
  const intervalId = setInterval(() => {
    console.log(i);
    i++;
    if (i >= stopAfter) {
      clearInterval(intervalId); // Stop the interval
    }
  }, 1000);
}

counter(10); // This will stop the counter after 10 iterations

export default counter;
