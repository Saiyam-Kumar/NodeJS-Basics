const fs = require("fs");
const d = fs.readFileSync("big.log","utf-8");           // BLOCKING
fs.readFile("big.log","utf-8",(e,data)=>console.log(data.length)); // NON-BLOCKING
console.log("this logs first");

console.log("start");
setTimeout(()=>console.log("timeout"),0);
setImmediate(()=>console.log("immediate"));
Promise.resolve().then(()=>console.log("promise"));
process.nextTick(()=>console.log("nextTick"));
console.log("end");
// start, end, nextTick, promise, timeout/immediate