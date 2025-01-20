const fs = require('fs');

// Asynchronous Method of file deleting

// fs.unlink("./file.txt",(err)=>{
//     if(err)throw err;
//     console.log("File Deleted Successfuly");
// });



// Synchronous Method of file deleting

fs.unlinkSync("./file1.txt");
console.log("File Deleted Successfuly");