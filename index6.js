const fs = require('fs');

// remove directory -> rmdir
//Asynchronous method

// fs.rmdir('./newDir',(err,files)=>{
//     if(err)throw err;
//     console.log("Directory is Removed");
// });

//delete directory with file remove us for example
// fs.unlinkSync('./newDir',(err,files)=>{
//     if(err)throw err;
//     console.log("Directory is Removed");
// });


// Synchronous method

// fs.rmdirSync("./DirUssingSyncMethod");
// console.log("Directory is Removed");

//delete directory with file remove us for example
fs.unlinkSync("./DirUssingSyncMethod");
console.log("Directory is Removed");