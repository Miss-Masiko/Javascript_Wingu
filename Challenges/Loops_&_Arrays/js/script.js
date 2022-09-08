document.write("Activity 1 - Create a variable called tasks with an array of 10 task items e.g. let tasks = ['swim', 'study', 'eat']");

//Using the "for" loop display the value of each of these items
//"console.log" the output, separated by a space


let tasks = ["swim", "study", "eat", "sweep", "cook", "breakfast", "relax", "exercise", "awake", "read"];

for(let i = 0; i < tasks.length; i++){
    console.log(tasks[i] + " ");
}



//Activity 2 - Edit the loop created above, to now calculate the sum of all the items leading up to 10. e.g. 1 + 2 + 3 = 6
//console.log your output
//Add your code below

let sum = 0;

for(let i = 0; i < tasks.length; i++){

    sum = sum + i;
    console.log(sum);
}



//Activity 3 - Using the tasks variable created above
//Create a loop that performs the 15 times table
//Leading up to the "length" of your tasks variable

let timesTable = 0;

for(let i = 0; i < tasks.length; i++){
    timesTable = timesTable + 15;
    console.log(timesTable);
}




//Activity 4 - Edit your code in activity 3, by creating an array called timesTable
//And store each value of the your fifteen times table in it
//Add your code below


let theSum = 0;

let times_Table = [];

for(let i = 0; i < tasks.length; i++){

    theSum = theSum + 15;

    times_Table.push(theSum);

    console.log(times_Table);
}



//Activity 5 - Using the array you created in the Activity 4, loop through the array and print each value to the console.
//Add your code below

for(let i = 0; i < times_Table.length; i++){
    console.log(times_Table[i] + " ");
}



//Activty 6 - Use the .reduce() built-in method to calculate the average of the array created in Activity 4.
//Add your code below


// let average = times_Table.reduce((total, num) => total + num)/times_Table.length;
// console.log(average);



//Bonus Activity
//Repeat the output of what you produced in activity 6, this time by not using the .reduce function
//Add your code below

//Create a "for of" loop, looping through the values of your tasks variable created in activity 1
//console.log the output
//Add your code below

//Try to replicate the above activity by using a "for in" loop instead
//Does this work? can you understand and explain why it displays what it displays?
//Add your code below