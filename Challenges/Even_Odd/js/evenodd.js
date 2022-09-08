document.write("==== The goal here is to check if the number is EVEN or ODD ====");


//get input from the user

let number = parseInt(prompt("Enter a Number"));



// create a reference to DOM Element with its own id

let display = document.getElementById("even");



// Check if the number is even or odd

if(number % 2 == 0){

    display.innerHTML += number + "is the evene number";
    
}else {
    display.innerHTML += number + "is the odd number";

}

