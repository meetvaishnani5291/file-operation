const fs = require("fs");

//read file asynchronously - non blocking
fs.readFile("file2.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
//write file asynchronously - non blocking
let newContent = "updated file2 with callback method";
fs.writeFile("file2.txt", newContent, (err) => {
  if (err) console.log(err);
});
//append file asynchronously - non blocking
newContent = "this is appended to file2 with callback method";
fs.appendFile("file2.txt", newContent, (err) => {
  if (err) console.log(err);
});
