// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  let dataModified = "";
  dataModified += data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i] === " " && data[i - 1] === " ") {
      continue;
    }
    dataModified += data[i];
  }
  fs.writeFile("a.txt", dataModified, "utf-8", () => {
    console.log("File cleaned");
  });
});
