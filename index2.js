const fs = require('fs');

// Asynchronous

// fs.appendFile("./file.txt","This is second batch of backend ",(err)=>{
//     if(err)throw err;
//     console.log("Data Added Successfuly");
// })



// Synchronous

fs.appendFileSync("./file1.txt","\n Hey Guys How are you????");
console.log("Data Added Successfuly");