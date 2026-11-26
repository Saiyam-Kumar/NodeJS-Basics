const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("in.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("in.txt.gz"));