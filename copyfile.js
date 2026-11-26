const fs = require("fs");

fs.createReadStream("in.txt")
    .pipe(fs.createWriteStream("out.txt"));