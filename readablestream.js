const fs = require("fs");

const stream = fs.createReadStream("big.log", "utf-8");

stream.on("data", (chunk) => {
    console.log("got", chunk.length, "bytes");
});

stream.on("end", () => console.log("done"));

stream.on("error", (err) => console.error(err));