// New Directory

const fs = require('fs');

//Asynchronous method

// fs.mkdir('newDir',(err)=>{
//     if(err)throw err;
//     console.log("New Directory is Created");
// });


// Synchronous method

// fs.mkdirSync("DirUssingSyncMethod");


//Create a new file name for example
fs.writeFileSync("./newDir/hello.txt","helllooooo guysssss")
console.log("File is Created");