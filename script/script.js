var body = document.querySelector("body")
var startBtn = document.querySelector(".startBtn")
var startDisplay = document.querySelector(".home")
var questionBox = document.querySelector(".questionDiv")
var questionBox2 = document.querySelector(".questionDiv2")
var questionBox3 = document.querySelector(".questionDiv3")
var questionBox4 = document.querySelector(".questionDiv4")
var questionBox5 = document.querySelector(".questionDiv5")
var question = document.querySelectorAll(".title")
var choice1 = document.querySelectorAll(".choice1")
var choice2 = document.querySelectorAll(".choice2")
var choice3 = document.querySelectorAll(".choice3")
var choice4 = document.querySelectorAll(".choice4")
var submit = document.querySelectorAll(".submit")
var timerDiv = document.querySelector(".timerDiv")
var seconds = document.querySelector(".seconds")
var finalPage = document.querySelector(".final")
var timeScore = document.querySelector(".score")
var rightWrong = document.querySelector(".right")
var subBtn = document.querySelector(".subBtn")
var scoreList = document.querySelector(".list")
var home = document.querySelector(".homeBtn")
//var highScoreSet = localStorage.getItem

var highScoreSet = localStorage.getItem("score");
//var initals = localStorage.getItem("initals");

var ans = ""
var wrong = 0
var right= 0 



var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },

  {
    title: "how do I put an element on the HTML with JavaScript?",
    choices: [".put", ".querySelector", ".add", ".append"],
    answer: ".append"
  },

  {
    title: "If are var is created in a function what is it's scope?",
    choices: ["local", "global", "universal", "scopey"],
    answer: "local"
  },

  {
    title: "How to invoke a function when a button on the HTML is clicked?",
    choices: [".addEventListner", ".target", ".eventListner", ".click"],
    answer: ".addEventListner"
  },
  
];

//var secondsLeft = 75
startBtn.addEventListener("click", quizStart)
//startBtn.addEventListener("click", timer)


questionBox.setAttribute("style", "visibility: hidden")
questionBox2.setAttribute("style", "visibility: hidden")
questionBox3.setAttribute("style", "visibility: hidden")
questionBox4.setAttribute("style", "visibility: hidden")
questionBox5.setAttribute("style", "visibility: hidden")
finalPage.setAttribute("style", "visibility: hidden")
timerDiv.setAttribute("style", "visibility: hidden")

var secondsLeft = 75
var hi = seconds
function quizStart (){

startDisplay.setAttribute("style", "visibility: hidden")
timerDiv.setAttribute("style", "visibility: visible")

//function wrongAnswer () {
//  seconds.textContent = secondsLeft - 15
//}





var timer = setInterval(function (){

  //function wrongAnswer () {
  //  seconds.textContent = secondsLeft - 15
  //}
  

secondsLeft--
hi.textContent = secondsLeft 

//console.log(secondsLeft)
if (secondsLeft <= 0) {
  clearInterval(timer)
  hi.textContent = "00"

final()
displayHighscores (highScoreSet)
}

}, 100)
function wrongAnswer () {

  if (secondsLeft <= 0) {} else {hi.textContent = secondsLeft - 15
  secondsLeft -= 15}
  
}


question1()

function question1() {
  questionBox.setAttribute("style", "visibility: visible")
  
  question[0].append(questions[0].title)
  choice1[0].append(questions[0].choices[0])
  choice2[0].append(questions[0].choices[1])
  choice3[0].append(questions[0].choices[2])
  choice4[0].append(questions[0].choices[3])

  
  
  
    submit[0].addEventListener("click",  function(event){
      event.preventDefault()
      var q1 = document.querySelector("input[name='q1']:checked")
      if (q1.value == 3) {
          right++
          
      } else {
          wrong++
          wrongAnswer()
      }
      
      if (!document.querySelector("input[name='q1']:checked").value) {
          
      } else {
          question2 ()
      }
      
  

    })
}

function question2 () {
  event.preventDefault()
  questionBox.setAttribute("style", "visibility: hidden")
  questionBox2.setAttribute("style", "visibility: visible")
  
  question[1].append(questions[1].title)
  choice1[1].append(questions[1].choices[0])
  choice2[1].append(questions[1].choices[1])
  choice3[1].append(questions[1].choices[2])
  choice4[1].append(questions[1].choices[3])

  
  
  
  submit[1].addEventListener("click",  function(event){
      event.preventDefault()
      var q2 = document.querySelector("input[name='q2']:checked")
      if (q2.value == 3) {
          right++
      } else {
        wrong++
        wrongAnswer()
      }
      
      if (!document.querySelector("input[name='q2']:checked").value) {
          
      } else {
          question3 (event)
      }

     

    })
}


function question3 (event) {
    event.preventDefault()
    questionBox2.setAttribute("style", "visibility: hidden")
    questionBox3.setAttribute("style", "visibility: visible")
    
    question[2].append(questions[2].title)
    choice1[2].append(questions[2].choices[0])
    choice2[2].append(questions[2].choices[1])
    choice3[2].append(questions[2].choices[2])
    choice4[2].append(questions[2].choices[3])
    
   
      
    
    
    
        submit[2].addEventListener("click",  function(event){
          event.preventDefault()
          var q3 = document.querySelector("input[name='q3']:checked")
          if (q3.value == 4) {
              right++
          } else {
            wrong++
            wrongAnswer()
          }
          
          if (!document.querySelector("input[name='q3']:checked").value) {
              
          } else {
              question4 (event)
          }
      
      })
}
  

  function question4 (event) {
    event.preventDefault()
    questionBox3.setAttribute("style", "visibility: hidden")
    questionBox4.setAttribute("style", "visibility: visible")
    
    question[3].append(questions[3].title)
    choice1[3].append(questions[3].choices[0])
    choice2[3].append(questions[3].choices[1])
    choice3[3].append(questions[3].choices[2])
    choice4[3].append(questions[3].choices[3])
  
    
    
    submit[3].addEventListener("click",  function(event){
        event.preventDefault()
        var q4 =document.querySelector("input[name='q4']:checked")
        if (q4.value == 1) {
            right++
        } else {
          wrong++
          wrongAnswer()
        }
        
        if (!document.querySelector("input[name='q4']:checked").value) {
            
        } else {
            question5 (event)
        }
    
      })
        
    
  }

  function question5 (event) {
    event.preventDefault()
    questionBox4.setAttribute("style", "visibility: hidden")
    questionBox5.setAttribute("style", "visibility: visible")
    
    question[4].append(questions[4].title)
    choice1[4].append(questions[4].choices[0])
    choice2[4].append(questions[4].choices[1])
    choice3[4].append(questions[4].choices[2])
    choice4[4].append(questions[4].choices[3])
  

    
    submit[4].addEventListener("click",  function(event){
          event.preventDefault()
          var q5 = document.querySelector("input[name='q5']:checked")
          if (q5.value == 1) {
              right++
          } else {
            wrong++
            wrongAnswer()
          }
          
          if (!document.querySelector("input[name='q5']:checked").value) {
              
          } else {
              final ()
              displayHighscores (highScoreSet)
          }
      
        })
}

        function final () {
          
          questionBox5.setAttribute("style", "visibility: hidden")
          timerDiv.setAttribute("style", "visibility: hidden")
          finalPage.setAttribute("style", "visibility: visible")
          
          
          clearInterval(timer)
          
          timeScore.textContent = secondsLeft
          rightWrong.textContent = right + "/5 " + "correct"
        }

        subBtn.addEventListener("click", function(event){
          
          event.preventDefault()
          var initalsInput = document.querySelector("#init").value
          var player = document.createElement("li")
          player.textContent = initalsInput + ", " + secondsLeft
          var highScore = highScoreSet + ';' + player.textContent

          scoreList.append(player)
          localStorage.setItem("score", highScore);
          //localStorage.setItem("score", secondsLeft);
        })

        function displayHighscores (scoresString) {
          var scoreArray = scoresString.split(";")
          
          for (var i = 1; i < scoreArray.length; i++){
            var playerScore = document.createElement("li")
            playerScore.textContent = scoreArray[i]
            scoreList.append(playerScore)
          }
        }

        home.addEventListener("click", function(){
          //finalPage.setAttribute("style", "display: none")
          //startDisplay.setAttribute("style", "display: inline")
          location.reload()
        })
}

