const fs = require("fs/promises");

//read file asynchronously
(async function () {
  try {
    const data = await fs.readFile("file3.txt");
    console.log(data.toString());
  } catch (error) {
    console.log(error.message);
  }
})();
//write file asynchronously
(async function () {
  try {
    const newContent = "updated file3 with promise method";
    await fs.writeFile("file3.txt", newContent);
  } catch (error) {
    console.log(error.message);
  }
})();
//apend file asynchronously
(async function () {
  try {
    const newContent = "this is appended to file3 with promise method";
    await fs.appendFile("file3.txt", newContent);
  } catch (error) {
    console.log(error.message);
  }
})();
