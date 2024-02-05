// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const data = "new data to write in a.txt";

fs.writeFile("a.txt", data, "utf-8", (err) => {
  if (err) {
    return new Error(err);
  }
  console.log("file written successfully");
});
