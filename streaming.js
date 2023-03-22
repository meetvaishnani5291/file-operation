const fs = require("fs");
const { pipeline } = require("stream");
const stream = require("stream");

//creating read stream
const readStream = fs.createReadStream("file1.txt");

//creating write stream
const writeStream = fs.createWriteStream("file1-uppercase.txt");

//creating transform stream
const tranformStream = new stream.Transform({
  transform(chunk, encoding, cb) {
    cb(null, chunk.toString().toUpperCase());
  },
});

//piping of streams
pipeline([readStream, tranformStream, writeStream], (err) => {
  if (err) console.log(err);
});
