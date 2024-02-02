// revision of callbacks -> lec 1.4

//// when to use async fns
// do a network call
// sleep/wait for some time
// read a file

// Q. If js is synchronus then how is it performing synchronous and asynchronous task simultanesouly ??
// => actually it isnt performing asynchronous task, it is being deligated to web apis , c++ code of browsers/ os for fs

// // Promises
// normal async function
function mySetTimeout(callback, duration) {
  setTimeout(function () {
    callback();
  }, duration);
}
mySetTimeout(function () {}, 1000);

// promisified async fn
function promisifiedMySetTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return p;
}

const ans = promisifiedMySetTimeout(2000);
console.log(ans);
ans.then(function () {
  console.log("timeout is done");
});
