const fs = require('fs');
/*
* append to file
*/

let appendedData = ' this is appended data to data1 file';

//append to file asynchronously - non blocking
fs.appendFile('data1.txt', appendedData, (err) => {
    if (err) console.log(err.message);
});


appendedData = ' this is appended data to data2 file'
//append to file synchronously
try{
    fs.appendFileSync('data2.txt', appendedData);   
}
catch(e){
    console.log(e.message)
}