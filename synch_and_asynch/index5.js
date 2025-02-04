const fs = require('fs');

//Asynchronous method

// fs.readdir('./newDir',(err,files)=>{
//     if(err)throw err;
//     console.log("Files");
// });


// Synchronous method

const Files=fs.readdirSync("./newDir");
console.log(Files);
console.log("Folder is readed Successfuly");


