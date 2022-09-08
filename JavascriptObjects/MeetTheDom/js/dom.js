// get the elements via dom api

let greenSquare = document.getElementById("greenBox");
let redSquare = document.getElementById("redBox");
let makeGreen = document.getElementById("greenButton");
let makeRed = document.getElementById("redButton");


makeGreen.addEventListener('click', function(){

    greenSquare.style.backgroundColor = "green";

});

makeRed.addEventListener('click', function(){
    redSquare.style.backgroundColor = "red";
});