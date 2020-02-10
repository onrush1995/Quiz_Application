// All answer
firstQuesAns = "helsinki";
secondQuesAns = "saimaa"
thirdQuesAns = "3";
fourthQuesAns = "kemijoki";
fifthQuesAns = "lemmenjoki";

// update score
score = 0;

// First question
var ques1 = prompt("What is the capital of Finland?");
if (ques1 == "helsinki"){
    document.writeln("Congratulation!!!,you get one point");
    if(ques1 == firstQuesAns){
        score++;
    }
}else{
    document.writeln("<p>"+ "Your answer " + ques1 + " is wrong.The correct answer is helsinki"+ ".</p>");
}

// Second question
var ques2 = prompt("What is the biggest lake in Finland?");
if (ques2 == secondQuesAns){
    document.writeln("Congratulation!!!,you achived one point");
    if(ques2 == secondQuesAns){
        score++;
    }
}else{
    document.writeln("<p>"+ "Your answer " + ques2 + " is wrong.The correct answer is "+ secondQuesAns + ".</p>");
}
// Third question
var ques3 = prompt("How many countries share border with Finland?");
if (ques3 == thirdQuesAns){
    document.writeln("Congratulation!!!,you added one point to your score card");
    if(ques3 == thirdQuesAns){
        score++;
    }
}else{
    document.writeln("<p>"+ "Your answer " + ques3 + " is wrong.The correct answer is "+ thirdQuesAns + ".</p>");
}
// Fourth question
var ques4 = prompt("What is the biggest river in Finland?");
if (ques4 == fourthQuesAns){
    document.writeln("Congratulation!!!,You have achived one point");
    if(ques4==fourthQuesAns){
        score++;
    }
}else{
    document.writeln("<p>"+ "Your answer " + ques4 + " is wrong.The correct answer is "+ fourthQuesAns + ".</p>");
}
// Fifth question
var ques5 = prompt("what is the biggest Eco park in Finland?");
if (ques5 == fifthQuesAns){
    document.writeln("Congratulation!!!.You get the last question answer");
    if(ques5 == fifthQuesAns){
        score++;
    }
}else{
    document.writeln("<p>"+ "Your answer " + ques5 + " is wrong.The correct answer is " + fifthQuesAns + ".</p>");
}

document.writeln("<h3>Your socre is " + score + ".</h3>");
