// All answer
firstQuesAns = "helsinki";
secondQuesAns = "saimaa"
thirdQuesAns = "3";
fourthQuesAns = "kemijoki";
fifthQuesAns = "lemmenjoki";

// First question
var ques1 = prompt("What is the capital of Finland?");
if (ques1 == "helsinki"){
    document.writeln("Congratulation!!!");
}else{
    document.writeln("<p>"+ "Your answer " + ques1 + " is wrong.The correct answer is Helsinki"+ ".</p>");
}

// Second question
var ques2 = prompt("What is the biggest lake in Finland?");
if (ques2 === "saimaa"){
    document.writeln("Congratulation!!!");
}else{
    document.writeln("<p>"+ "Your answer " + ques2 + " is wrong.The correct answer is "+ secondQuesAns + ".</p>");
}
// Third question
var ques3 = prompt("How many countries share border with Finland?");
if (ques3 == 3){
    document.writeln("Congratulation!!!");
}else{
    document.writeln("<p>"+ "Your answer " + ques3 + " is wrong.The correct answer is "+ thirdQuesAns + ".</p>");
}
// Fourth question
var ques4 = prompt("What is the biggest river in Finland?");
if (ques4 == fourthQuesAns){
    document.writeln("Congratulation!!!");
}else{
    document.writeln("<p>"+ "Your answer " + ques4 + " is wrong.The correct answer is "+ fourthQuesAns + ".</p>");
}
// Fifth question
var ques5 = prompt("what is the biggest Eco park in Finland?");
if (ques5 == fifthQuesAns){
    document.writeln("Congratulation!!!");
}else{
    document.writeln("<p>"+ "Your answer " + ques5 + " is wrong.The correct answer is " + fifthQuesAns + ".</p>");
}
