var timeEl = document.querySelector("#second");
// Selects element by id
var mainEl = document.getElementById("main");
var startButton = document.getElementById("start-button");
var questionContainer = document.getElementById("question");
var buttonChoices = document.querySelectorAll(".btn");
console.log(buttonChoices);

var secondsLeft = 60;
// store the questions and the answer choices inside an object, and store the objects inside an array
var quizQuestions = [
  {
    question: "How are you feeling?",
    choice0: "Ok",
    choice1: "Meh",
    choice2: "So-so",
    choice3: "Great!",
    corret: "Meh"
  },
  {
    question: "How is James feeling?",
    choice1: "Ok",
    choice2: "Meh",
    choice3: "So-so",
    choice4: "Great!",
    corret: "Ok"
  },
  {
    question: "How is James feeling?",
    choice1: "Ok",
    choice2: "Meh",
    choice3: "So-so",
    choice4: "Great!",
    corret: "Ok"
  },
  {
    question: "How is James feeling?",
    choice1: "Ok",
    choice2: "Meh",
    choice3: "So-so",
    choice4: "Great!",
    corret: "Ok"
  },
  {
    question: "How is James feeling?",
    choice1: "Ok",
    choice2: "Meh",
    choice3: "So-so",
    choice4: "Great!",
    corret: "Ok"
  },
  {
    question: "How is James feeling?",
    choice1: "Ok",
    choice2: "Meh",
    choice3: "So-so",
    choice4: "Great!",
    corret: "Ok"
  }, 
  // and so on
]
var currentQuestion = 0;

function setTime() {
  // Sets interval in variable
  if(timerInterval) {
    return;
  } else {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
      // console.log('timerinterval is', timerInterval);
  
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        showTimesUpPage();
      }
    }, 1000);
  }
}

function displayQuizQuestion() {
  // set div with id =question to be first question
  console.log('inside displayQuizQuestion');
  questionContainer.textContent = quizQuestions[currentQuestion]["question"];
  buttonChoices.forEach( function(btn, key) {
    btn.textContent = quizQuestions[currentQuestion]["choice" + key];
    // now you cauld attach an event listener to each btn
    btn.addEventListener("click", checkUserChoice);
  })
}

function checkUserChoice(event) {
  // 
  console.log('inside checkUserChoices');
  var thingCLickedOn = event.target;
  var valueofThing = thingCLickedOn.textContent;
  console.log(valueofThing);
}

function showTimesUpPage() {
  // here is where I'll maybe create
  // some HTML elements and display them
  // to the page, or optionally set the 
  // CSS display property of some pre-existing
  // HTML elements to display: block or display: inline

}

// when the user selects a wrong choice,
// set secondsLeft = secondsLeft - 5;
function beginQuiz() {
  console.log("inside begin quiz");
  setTime();
  // run function to display question and choices
  displayQuizQuestion();
}

startButton.addEventListener("click", beginQuiz);

