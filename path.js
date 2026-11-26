const path = require("path");
console.log("JOIN:", path.join("src", "css", "main.css"));
console.log("RESOLVE:", path.resolve("data", "users.json"));

const file = "/app/index.html";
console.log("BASENAME:", path.basename(file));
console.log("DIRNAME:", path.dirname(file));
console.log("EXTNAME:", path.extname(file));
console.log("CURRENT DIRECTORY:", __dirname);