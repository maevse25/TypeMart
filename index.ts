// Importing products from products.ts into index.ts
import products from './products';

// Declare a variable named 'productName', annotate as string, set set its value to one of the product names in products.ts
const productName: string = 'tote bag';

// For receipt we will need following variables:
let shipping:       number;
let taxPercent:     number;
let taxTotal:       number;
let total:          number;
let shippingAddress:string = "Some address, Kyiv";

/*
Declare a variable named 'product'. find it by its name from our list of products. 
Use any method to find a product inside products that matches the string stored in the productName variable.
Once you have found the matching product, store that product in a variable named product.
*/

const product = products.filter(
  product => {
    return product.name === productName;
  }
)[0];

// print the 'product' variable’s value
console.log(product);

/* Write a conditional that checks if the .preOrder property is true on the product, 
then log a message to the console to tell the customer that we’ll send them a message when it’s on the way */
if (product.preOrder){
  console.log('we wll send it later. it is on the way.');
}

/* If the price of an item is over $25, we will provide free shipping.
Write a conditional that sets shipping to 0 if the price of the product is 25 or over. 
Include a console.log() stating that we provide free shipping for this product. If the product is under $25, set the value of shipping to 5. */
if (product.price > 25){
  console.log('This item will receive freeshipping');
  shipping = 0;
} else {
  shipping = 5
}

/*
Since our shop operates out of New York City, we’re required to pay extra tax when someone from New York buys a product from TypeMart.
If the shipping address contains the value 'New York', then we need to set the taxPercent to 0.1 (a shocking 10%), otherwise, the taxPercent should be .05.
To check if the shippingAddress contains 'New York' you can use the .match() method to check.
*/
if (shippingAddress.match('New York')){
  taxPercent = 0.1;
} else{
  taxPercent = 0.05;
}

// First, multiply the product.price by the taxPercent, then assign that value to the taxTotal variable.
taxTotal = product.price*taxPercent;

// Then, add together the product.price, taxTotal, and shipping, and assign it to the total variable.
total = product.price+taxTotal+shipping;

// Finally, log the product name, the shipping address, the price, the tax, the shipping cost, and the total cost to the console.
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);