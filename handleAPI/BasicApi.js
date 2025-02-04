const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'aplication\json'});
    res.write(JSON.stringify({name:"dev",age:20,contact:7015842404}));
    res.end();  
}).listen(2000);