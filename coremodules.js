const fs = require("fs");

fs.writeFile("data.txt","hello world",
    function(err){
        if(err){
            console.log("File not created");
        }else{
            console.log("File created successfully");
        }
    });

fs.readFile("data.txt","utf-8",
    function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });

fs.appendFile("data.txt","\nSaiyam Kumar",
    function(err){
        if(err){
            console.log("File not created");
        }else{
            console.log("File created successfully");
        }
    });

fs.readFile("data.txt","utf-8",
    function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });