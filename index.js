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
var ques1_answer = ques1.toLowerCase();
if (ques1_answer === firstQuesAns){
    document.writeln("<br>"+"Congratulation!!!, You get one point"+"</br>");
    if(ques1_answer === firstQuesAns){
        score++;
    }
}else{
    document.writeln("<p>"+ "Your answer " + ques1 + " is wrong.The correct answer is helsinki"+ ".</p>");
}

// Second question
var ques2 = prompt("What is the biggest lake in Finland?");
var ques2_answer = ques2.toLowerCase();
if (ques2_answer == secondQuesAns){
    document.write("<br>"+"Congratulation!!!,You achived one point" +".</br>");
    if(ques2_answer == secondQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques2 + " is wrong.The correct answer is "+ secondQuesAns + ".</p>");
}
// Third question
var ques3 = prompt("How many countries share border with Finland?");
var ques3_answer = ques3.toLowerCase();
if (ques3_answer == thirdQuesAns){
    document.write("<br>"+"Congratulation!!!, You added one point to your score card"+"</br>");
    if(ques3_answer == thirdQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques3 + " is wrong.The correct answer is "+ thirdQuesAns + ".</p>");
}
// Fourth question
var ques4 = prompt("What is the biggest river in Finland?");
var ques4_answer = ques4.toLowerCase();
if (ques4_answer == fourthQuesAns){
    document.write("<br>"+ "Congratulation!!!, You have achived one point"+ "</br>");
    if(ques4_answer == fourthQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques4 + " is wrong.The correct answer is "+ fourthQuesAns + ".</p>");
}
// Fifth question
var ques5 = prompt("what is the biggest Eco park in Finland?");
var ques5_answer = ques5.toLowerCase();
if (ques5_answer == fifthQuesAns){
    document.write("<br>"+"Congratulation!!!. You get the last question answer"+"</br>");
    if(ques5_answer == fifthQuesAns){
        score++;
    }
}else{
    document.write("<p>"+ "Your answer " + ques5 + " is wrong.The correct answer is " + fifthQuesAns + ".</p>");
}

//document.writeln("<h3>Your socre is " + score + ".</h3>");
//total_Score = score;
document.write("<h3>Your socre is " + score + ".</h3>");


if(score >= 4){
    document.write("You earned <strong>Gold madel.</strong>");

}else if(score >= 3){
    document.write("You earned <strong>Silver madel.</strong>");
}else if (score >=2){
    document.write("You have earned <strong>Bronze madel.</strong>");
}else{
    document.write("<strong>Please try again</strong>");
}



