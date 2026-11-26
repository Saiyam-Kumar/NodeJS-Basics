const http = require("http");

http.createServer((req,res)=>{
    if(req.url === "/api/get/user" && req.method === "GET"){
        const user = {
            id:1,
            name:'Saiyam',
            role:'Student'
        }
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(user));
    }else{
        res.writeHead(404); 
        res.end();
    }
}).listen(3000);