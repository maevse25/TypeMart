// importing products from products.ts into index.ts
import products from './products';

// Declare a variable named 'productName', annotate as string, set set its value to one of the product names in products.ts
const productName: string = 'beanie';

// For receipt we will need following variables:
let shipping:       number;
let taxPercent:     number;
let taxTotal:       number;
let total:          number;
let shippingAddress:string = "Some address, New York";

// Declare a variable named 'product'. find it by its name from our list of products. Use any method to find a product inside products that matches the string stored in the productName variable.
// Once you have found the matching product, store that product in a variable named product.
const product = products.filter(
  product => {
    return product.name === productName;
  }
)[0];

// print the 'product' variable’s value
console.log(product);

// write a conditional that checks if the .preOrder property is true on the product, then log a message to the console to tell the customer that we’ll send them a message when it’s on the way
if (product.preOrder){
  console.log('we wll send it later. it is on the way.');
}

