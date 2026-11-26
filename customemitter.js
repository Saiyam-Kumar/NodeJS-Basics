const EventEmitter = require("events");

// Create custom Cart class
class Cart extends EventEmitter {

    constructor() {
        super();
        this.items = [];
    }

    // Add item to cart
    add(item) {
        this.items.push(item);
        this.emit("added", item);
    }
}

// Create cart object
const cart = new Cart();

// Listen for added event
cart.on("added", (item) => {
    console.log("Added:", item);
});

// Add product
cart.add("Eco Bottle");