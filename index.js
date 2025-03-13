"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing products from products.ts into index.ts
var products_1 = require("./products");
// Declare a variable named 'productName', annotate as string, set set its value to one of the product names in products.ts
var productName = 'beanie';
// For receipt we will need following variables:
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "Some address, New York";
// Declare a variable named 'product'. find it by its name from our list of products. Use any method to find a product inside products that matches the string stored in the productName variable.
// Once you have found the matching product, store that product in a variable named product.
var product = products_1.default.filter(function (product) {
    return product.name === productName;
})[0];
// print the 'product' variable’s value
console.log(product);
// write a conditional that checks if the .preOrder property is true on the product, then log a message to the console to tell the customer that we’ll send them a message when it’s on the way
if (product.preOrder) {
    console.log('we wll send it later. it is on the way.');
}
