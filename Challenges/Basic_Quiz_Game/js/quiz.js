// Initializing an empty array for correct answers

let correctAnswers = [];

// Initialising an array with letters to represent correct answers

let letter = ["a", "b", "c", "d"];

//create questions for the quiz

let question1 = prompt("===== Only enter alphabet ===== \n To make a website mobile friendly, you make your website \n a. Responsive \n b. Reactive \n c. Fast Loading \n d. none of the above");
let question2 = prompt("===== Only enter alphabet ===== \n What does css stands for \n a. Current Stylesheet \n b. Current Sheet Style \n c. Cascading Stylesheet \n d. none of the above");
let question3 = prompt("===== Only enter alphabet ===== \n Which of the statement is false \n a. You can make a website without using HTML \n b. You can make a website without PHP \n c. You can make a website without JS \n d. All of the above");

// if statement to check correctAnswers

if (question1 === "a"){
    correctAnswers.push();
    document.write("<p> Correct" + "</p>");
}else {
    document.write("<p>InCorrect - The answer is a(Responsive)" + "</p>");
}
if (question2 === "c"){
    correctAnswers.push();
    document.write("<p> Correct" + "</p>");
}else {
    document.write("<p>InCorrect - answer is c(casscading stylesheet)" + "</p>");
}
if (question3 === "a"){
    correctAnswers.push();
    document.write("<p> Correct" + "</p>");
}else {
    document.write("<p>InCorrect - answer is a(you cannot make a website without HTML)" + "</p>");
}
