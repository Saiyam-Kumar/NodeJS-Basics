const EventEmitter = require("events");

// Create EventEmitter object
const bus = new EventEmitter();

// on() - Listen to an event
bus.on("order", (item) => {
    console.log("New order:", item);
});

// emit() - Trigger an event
bus.emit("order", "Laptop");

// once() - Execute only one time
bus.once("login", () => {
    console.log("User logged in");
});

bus.emit("login");
bus.emit("login");  // No output

// off() - Remove a listener
function greet() {
    console.log("Hello!");
}

bus.on("greet", greet);
bus.off("greet", greet);

bus.emit("greet");  // No output