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
    document.writeln("<br>"+"Congratulation!!!, You get one point"+"</br>");
    if(ques1 == firstQuesAns){
        score++;
    }
}else{
    document.writeln("<p>"+ "Your answer " + ques1 + " is wrong.The correct answer is helsinki"+ ".</p>");
}

// Second question
var ques2 = prompt("What is the biggest lake in Finland?");
if (ques2 == secondQuesAns){
    document.write("<br>"+"Congratulation!!!,You achived one point" +".</br>");
    if(ques2 == secondQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques2 + " is wrong.The correct answer is "+ secondQuesAns + ".</p>");
}
// Third question
var ques3 = prompt("How many countries share border with Finland?");
if (ques3 == thirdQuesAns){
    document.write("<br>" +"Congratulation!!!, You added one point to your score card"+"</br>");
    if(ques3 == thirdQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques3 + " is wrong.The correct answer is "+ thirdQuesAns + ".</p>");
}
// Fourth question
var ques4 = prompt("What is the biggest river in Finland?");
if (ques4 == fourthQuesAns){
    document.write("<br>"+ "Congratulation!!!, You have achived one point"+ "</br>");
    if(ques4==fourthQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques4 + " is wrong.The correct answer is "+ fourthQuesAns + ".</p>");
}
// Fifth question
var ques5 = prompt("what is the biggest Eco park in Finland?");
if (ques5 == fifthQuesAns){
    document.write("<br>"+"Congratulation!!!. You get the last question answer"+"</br>");
    if(ques5 == fifthQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques5 + " is wrong.The correct answer is " + fifthQuesAns + ".</p>");
}

//document.writeln("<h3>Your socre is " + score + ".</h3>");
//total_Score = score;
document.write("<h3>Your socre is " + score + ".</h3>");


if(score >= 4){
    document.write("You earned Gold madel");
}else if(score >= 3){
    document.write("You earned Silver madel");
}else if (score >=2){
    document.write("You have earned Bronze madel");
}else{
    document.write("Please try again");
}



