const fs = require("fs");
/*
 * reading from file
 */

//read file asynchronously - non blocking
fs.readFile("file1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//read file synchronously
try {
  const data = fs.readFileSync("file1.txt");
  console.log(data.toString());
} catch (e) {
  console.log(e.message);
}
