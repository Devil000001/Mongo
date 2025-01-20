// Asynchronous

const fs  = require('fs');

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// });

// Synchronous 

 const data = fs.readFileSync("./file1.txt","utf-8");
console.log(data);