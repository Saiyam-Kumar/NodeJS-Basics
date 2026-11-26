const fs = require("fs/promises");

async function readFile(){
    const data = await fs.readFile("data.txt","utf-8");
    console.log(data);
}
readFile();