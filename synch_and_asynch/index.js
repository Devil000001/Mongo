const fs = require('fs');

// Synchronous

// fs.writeFileSync("file.txt","helloooooooooo wordlllllllllllllllll");
// console.log("File Written Successfully using sync Method");



// Asynchronous way 

fs.writeFile("file1.txt","hellloooo koduuuu",(err)=>{
    if(err)throw err;
    console.log("File Written Successfuly");
});