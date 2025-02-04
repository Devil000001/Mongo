const http=require('http');





//--- create-server simple code ---
                               
// http.createServer((req,res)=>{

//     res.write("<h>hello world</h>");
//     res.end();

// }).listen(3000);





//----- function type create-server ----


// function data(req,res){
//     res.write("<h>dark world</h>");
//     res.end();
// }

// http.createServer(data).listen(3000);







// ---- arroy function type create-server ----

const data=(req,res)=>{
    res.write("<h>welcome back again</h>");
    res.end();
}

http.createServer(data).listen(3000);