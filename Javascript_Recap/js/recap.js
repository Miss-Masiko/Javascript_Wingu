// create a variable for the welcome message

let greeting = "Hello"; // srting data type
let Fname = "Ariana"; //string data type
let message = "Welcome to Cape Town";


// concatenate the three variable above to create a welcome message

let welcome = greeting + Fname + message;

// document.write(welcome);
// console.log(welcome);


// create a variable to hold the details of sign

let sign = "Montague House";
let tiles = sign.length;
let subtotal = tiles * 5;
let shipping = 100;
let grandTotal = subtotal + shipping;

console.log("\n");
document.write("\n");

// document.write(grandTotal);
// console.log(grandTotal);

// get element that has an id greeting

let element = document.getElementById("greeting");

//Replace the existing content to something else

element.textContent = message;

