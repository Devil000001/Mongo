mongodb+srv://devkadawla66:<db_password>@cluster0.ub4v6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// How to create package.json file in Backend
->package - version
->author
->license
->command - npm init


->version
->3.04.05
-> 3 -> Major Upatadeb(During a project you dont't have to upgrade to major
 updates ) -> 4.0.0
 -> 04 -> recommanded updates ->3.05.06
 -> 1.0.0
 -> difference between package.json aur lock-package.json file


--------------   Fs Module in Node Js  ---------------


---> Different file operations
    -> Read a file 
    -> write a file
    -> update a file
    -> Delete a file
    -> Creating a Directory(folder)
    -> Reading a directory(folder)
    -> Deleting a directory
    -> Checking if directory exists or not




---------   We have tonrequire fs module --------------

========= Machanism of Require ==========
1. Resolving
2. Loading
3. Wrapping
4. Evaluation - (iffe)
5. Caching




fs is built in module of node js 


operation --> Shynchronous Javascript  -> Asynchronous operations
 -> Asynchronous Javascript  -> Asynchronous operations


 -> Read - Readsync - Read(Asynchronous)
 -> Write - writesync - write(Asynchronous)
 -> Append - Appendsync - append(Asynchronous)
 -> Delete (Unlink) - Deletesync - Delete (Asynchronous)




const fs = require('fs');

Synchronous

fs.writeFileSync("file.txt","helloooooooooo wordlllllllllllllllll");
console.log("File Written Successfully using sync Method");


Asynchronous way 

fs.writeFile("file1.txt","hellloooo koduuuu",(err)=>{
    if(err)throw err;
    console.log("File Written Successfuly");
});


// storing specific ip address -> fs module
// log the user data


// Encode  - Decode  - utf -8



// Asynchronous

const fs  = require('fs');

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// });

// Synchronous 

 const data = fs.readFileSync("./file1.txt","utf-8");
console.log(data);


// Update file

const fs = require('fs');

// Asynchronous

// fs.appendFile("./file.txt","This is second batch of backend ",(err)=>{
//     if(err)throw err;
//     console.log("Data Added Successfuly");
// })



// Synchronous

fs.appendFileSync("./file1.txt","\n Hey Guys How are you????");
console.log("Data Added Successfuly");


// Deleting a file

const fs = require('fs');

// Asynchronous Method of file deleting

// fs.unlink("./file.txt",(err)=>{
//     if(err)throw err;
//     console.log("File Deleted Successfuly");
// });



// Synchronous Method of file deleting

fs.unlinkSync("./file1.txt");
console.log("File Deleted Successfuly");#   b a c k e n d - c o d e -  
 #   b a c k e n d - c o d e -  
 #   m o n g o d b  
 