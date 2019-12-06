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

var ans = ""
var wrong = 0
var right= 0 
var secondsLeft = 75


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
    title: "hiiiii",
    choices: ["1", "2", "3", "4"],
    answer: "1"
  },

  {
    title: "4",
    choices: ["5", "6", "7", "8"],
    answer: "5"
  },

  {
    title: "5",
    choices: ["9", "10", "11", "12"],
    answer: "9"
  },
  
];

startBtn.addEventListener("click", quizStart)
//startBtn.addEventListener("click", timer)
questionBox.setAttribute("style", "display: none")
questionBox2.setAttribute("style", "display: none")
questionBox3.setAttribute("style", "display: none")
questionBox4.setAttribute("style", "display: none")
questionBox5.setAttribute("style", "display: none")
timerDiv.setAttribute("style", "display: none")


function quizStart (){
timerDiv.setAttribute("style", "display: inline")
var timer = setInterval(function (){
//timerDiv.setAttribute("style", "display: inline")
secondsLeft--
seconds.textContent = secondsLeft

if (secondsLeft === 0) {
  clearInterval(timer)
}


}, 100)
question1()
function question1() {
  
  startDisplay.setAttribute("style", "display: none")
  questionBox.setAttribute("style", "display: inline")
  

 
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
        
    }
    
    if (!document.querySelector("input[name='q1']:checked").value) {
        
    } else {
        question2 ()
    }

   })
    
}

function question2 () {
  event.preventDefault()
  questionBox.setAttribute("style", "display: none")
  questionBox2.setAttribute("style", "display: inline")
  
  
  
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
    }
    
    if (!document.querySelector("input[name='q2']:checked").value) {
        
    } else {
        question3 (event)
    }

   })
    
}


function question3 (event) {
    event.preventDefault()
    questionBox.setAttribute("style", "display: none")
    questionBox2.setAttribute("style", "display: none")
    questionBox3.setAttribute("style", "display: inline")
    
    
    
    question[2].append(questions[2].title)
    choice1[2].append(questions[2].choices[0])
    choice2[2].append(questions[2].choices[1])
    choice3[2].append(questions[2].choices[2])
    choice4[2].append(questions[2].choices[3])
  
    submit[2].addEventListener("click",  function(event){
        event.preventDefault()
        var q3 = document.querySelector("input[name='q3']:checked")
        if (q3.value == 1) {
            right++
        } else {
            wrong++
        }
        
        if (!document.querySelector("input[name='q3']:checked").value) {
            
        } else {
            question4 (event)
        }
    
       })
        
    }
  

  function question4 (event) {
    event.preventDefault()
    questionBox.setAttribute("style", "display: none")
    questionBox.setAttribute("style", "display: none")
    questionBox2.setAttribute("style", "display: none")
    questionBox3.setAttribute("style", "display: none")
    questionBox4.setAttribute("style", "display: inline")
    
    
    
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
        }
        
        if (!document.querySelector("input[name='q4']:checked").value) {
            
        } else {
            question5 (event)
        }
    
       })
        
    
  }

  function question5 (event) {
    event.preventDefault()
    questionBox.setAttribute("style", "display: none")
    questionBox.setAttribute("style", "display: none")
    questionBox2.setAttribute("style", "display: none")
    questionBox3.setAttribute("style", "display: none")
    questionBox4.setAttribute("style", "display: none")
    questionBox5.setAttribute("style", "display: inline")
    
    
    
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
        }
        
        if (!document.querySelector("input[name='q5']:checked").value) {
            
        } else {
            questionBox5.setAttribute("style", "display: none")
            startDisplay.setAttribute("style", "display: inline")
        }
    
       })
        
    
   
  }
}