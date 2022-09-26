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
    question: "What is Matt's highest finishing place",
    choice0: "1st",
    choice1: "3rd",
    choice2: "4th",
    choice3: "Last place",
    corret: "3rd"
  },
  {
    question: "Who has had the worst record for any season?",
    choice1: "Will",
    choice2: "Hunter",
    choice3: "Vernon",
    choice4: "Erik",
    corret: "Hunter"
  },
  {
    question: "Who has made the most transactions in league history?",
    choice1: "Chris",
    choice2: "Will",
    choice3: "Jaron",
    choice4: "Other",
    corret: "Jaron"
  },
  {
    question: "Who has the most 2nd place finishes?",
    choice1: "Hunter",
    choice2: "Will",
    choice3: "Jaron",
    choice4: "All",
    corret: "All"
  },
  {
    question: "Why does Jaron need so many transactions?",
    choice1: "We dont know",
    choice2: "The limit does not exist",
    choice3: "He wants to ruin the waiver wire",
    choice4: "He is just confused",
    corret: "He is just confused"
  },
  {
    question: "Who was the first running back taken in our 2015 draft?",
    choice1: "Adrian Peterson",
    choice2: "Matt Forte",
    choice3: "Shady McCoy",
    choice4: "DeMarco Murray",
    corret: "Shady McCoy"
  }, 
  
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

