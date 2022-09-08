// initialize our database array to have 10 random usernames in it

let database = ["Sean", "Ania", "Theo", "Morgan", "Inga", "Ariana", "Muhammed", "Nwabisa", "Jean", "Leslie"];



//display a menu using the prompt() function

let menu = prompt("========== Menu ========== \n What would you like to do? \n 1) Add three users \n 2) Remove User \n 3) Display Users \n 4) Sort Users");




//Save the input of the user to a variable let choice

let choice;



//Switch statement to run one of the following functionalities based on the choice 

switch(menu) {

    case "Add three users":
        choice = prompt("Please type 3 username separed by commas");
        database.push(choice);
        document.getElementById("array").innerHTML = database;

    break;

    case "Remove User":
        choice = prompt("What is the username that you want to remove from the database?");
        let index = database.indexOf(choice);
        if(index >= 0){
            database.splice(index, 1);
        }
        document.getElementById("array").innerHTML = database;

    case "Display Users":

    database.join();
    document.getElementById("array").innerHTML = database;

    case "Sort Users":

    database.sort();
    document.getElementById("array").innerHTML = database;


    default:
    choice = "sorry couldnt add the users";

}