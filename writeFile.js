const fs = require('fs');
/*
* writing to the file
*/
let newdata = "hello this is updated data into data1 file";

//writing to file asynchronously - non blocking
fs.writeFile('data1.txt', newdata, (err) => {
    if(err) console.log(err.message)
})


newdata = "hello this is updated data into data2 file";

//writing to file synchronously
try{
    fs.writeFileSync('data2.txt', newdata);
}
catch(e){
    console.log(e.message)
}