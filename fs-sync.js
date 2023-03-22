const fs = require("fs");

//read file synchronously
try {
  const data = fs.readFileSync("file1.txt");
  console.log(data.toString());
} catch (error) {
  console.log(error.message);
}
//write file synchronously
try {
  const newContent = "updated file1 with sync method";
  fs.writeFileSync("file1.txt", newContent);
} catch (errore) {
  console.log(error.message);
}
//apend file synchronously
try {
  const newContent = "this is appended to file1 with sync method";
  fs.appendFileSync("file1.txt", newContent);
} catch (error) {
  console.log(error.message);
}
