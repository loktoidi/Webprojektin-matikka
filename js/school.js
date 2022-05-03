/*Sauli Holappa
Saulin Matikkasivu*/

let timeLeft = 60;
let timerInterval;
let score = 0;
let correctAnswer = 0;
function startGame()

{ /*Aloitus*/

nextQuestion();

    document.getElementById("startBtn").disabled = true; /*tämä estää start nappulan uudelleen painamisen*/

    let timeDisplay = document.getElementById("timeDisplay");
    document.getElementById("timeDisplay").hidden = false; /*piilottaa timerin alussa*/
    timerInterval = setInterval(function(){
    timeLeft -= 1;

    timeDisplay.innerHTML = "Aika: " + timeLeft;
    if (timeLeft == 0) /*pysäyttää timerin nollaan */
    {
        clearInterval(timerInterval); /*estää nappuloiden painamisen ajan loputtua*/
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;    
        document.getElementById("btn3").disabled = true;
        document.getElementById("btn4").disabled = true;
    }
},1000) /*1000 laskurissa on millisekuntia eli 1 sekunti  */  
}

function nextQuestion()
{
    let operationDiv = document.getElementById("operation");
    let firstNum = Math.ceil(Math.random() * 2);
    let secondNum = Math.ceil(Math.random() * 10);
    correctAnswer = firstNum * secondNum;
    operationDiv.innerHTML = firstNum + "*" + secondNum;

/*määritetään neljälle nappulalle random vaihtoehdot, joista yksi on oikea vastaus*/
    let wrongAnswer1 = Math.ceil(Math.random() * 2) * Math.ceil(Math.random() * 10);
    let wrongAnswer2 = Math.ceil(Math.random() * 2) * Math.ceil(Math.random() * 10);
    let wrongAnswer3 = Math.ceil(Math.random() * 2) * Math.ceil(Math.random() * 10);
    let wrongAnswer4 = Math.ceil(Math.random() * 2) * Math.ceil(Math.random() * 10); 
                   

document.getElementById("btn1").innerHTML = wrongAnswer1;
document.getElementById("btn2").innerHTML = wrongAnswer2;    
document.getElementById("btn3").innerHTML = wrongAnswer3;
document.getElementById("btn4").innerHTML = wrongAnswer4;


    let correctAnswerIndex = Math.floor(Math.random()*4)+1;
    let correctAnswerID = "btn" + correctAnswerIndex;
    document.getElementById(correctAnswerID).innerHTML = correctAnswer;

}
function checkAnswer(buttonIndex)
{
    let answer = document.getElementById("btn" + buttonIndex).innerHTML;
    if (answer == correctAnswer) score +=1;
    document.getElementById("CurrentScore").innerHTML = "Pisteesi: " + score;
    
    nextQuestion();
}/*lopetus*/

/* Koodin lähdetiedosto/tutoriaali https://www.youtube.com/watch?v=lrInxLh4Hyg*/