let today = new Date(); // to get the current date by creating a new date object
let hour = today.getHours(); // get the current time
let year = today.getFullYear();
let greeting;


// display the appropriate greeting based on the time of the day
if(hour > 12){
    greeting = "Good Afternoon";
} else if(hour >18) {
    greeting = "Good Evening";
} else if(hour >0) {
    greeting = "Good Morning";
}else {
    greeting = "Welcome!";
}

document.write('<h3>' + greeting + year + '</h3>');