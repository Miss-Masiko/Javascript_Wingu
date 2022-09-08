document.write("Chapter 1: IF Statement" + "<br />");
document.write("<br />");


let x = 5;

if(x < 10){

    document.write(x + "is less than 10");

}

document.write("<br />");
document.write("<br />");


document.write("Chapter 2: IF...elseif statement" + "<br />");
document.write("<br />");

let score = 50;

if(score < 10){

    document.write(score + "is less than 10");

}else if(score > 20){

    document.write(score + "is greater than 20"); // statisfies the condition

}

document.write("<br />");
document.write("<br />");


document.write("Chapter 3: IF...elseif... else statement" + "<br />");
document.write("<br />");

let grade = 15;

if(grade < 10){

    document.write(grade + "is less than 10");

}else if(grade > 20){

    document.write(grade + "is greater than 20"); 

}else {
    document.write(grade + "is between 10 and 20!");
}
document.write("<br />");
document.write("<br />");