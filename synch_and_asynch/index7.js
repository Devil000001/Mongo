const fs = require('fs');

//Asynchronous method

// fs.renameSync('./newDir',(err,files)=>{
//     if(err)throw err;
//     console.log("Directory is Removed");
// });


// Synchronous method

fs.renameSync("./newfolder","newdirectory");
console.log("Directory name is Changed");
