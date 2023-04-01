var timeLeft = 33; //total time available
var timerId;
var currentQuestionIndex = 0;
var numCorrect = 0;



//references to HTML
var startButton = document.getElementById("start-btn");
var questionsDiv = document.getElementById("questions");
var timerDiv = document.getElementById("timer");
var score = document.getElementById("score");

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        timerDiv.innerHTML = "Game Over";
        showScore();
        return;
    }

    var question = questions[currentQuestionIndex];
    var questionsEl = document.createElement("h2");
    questionsEl.textContent = question.question;
    questionsDiv.appendChild(questionsEl);

    question.choices.forEach(function (choice) {
        var choiceEl = document.createElement("button");
        choiceEl.textContent = choice;
        choiceEl.style.display = "flex-wrap";
        choiceEl.style.flex = "wrap";
        choiceEl.style.marginBottom = "10px";
        choiceEl.style.marginLeft = "5px";
        choiceEl.style.marginRight = "5px";
        choiceEl.style.padding = "5px";
        choiceEl.style.width = "40%";
        choiceEl.style.borderRadius = "10px";
        choiceEl.style.backgroundColor = "pink";
        choiceEl.style.border = "none";
        choiceEl.style.fontSize = "18px";
        choiceEl.style.cursor = "pointer";
        choiceEl.addEventListener("mouseover", function () {
        choiceEl.style.backgroundColor = "white";
    });
    choiceEl.addEventListener("mouseout", function () {
        choiceEl.style.backgroundColor = "pink";
    });
        questionsDiv.appendChild(choiceEl);
        choiceEl.addEventListener("click", function () {
            if (choice === question.answer) {
                numCorrect++;
                // console.log("correct");
            } else {
                // console.log("incorrect");
                timeLeft -= 3;
            }
            //increment questions
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                questionsDiv.innerHTML = "";
                showQuestion
            } else {
                showScore()
            }
        });
    });
}

//event listener for start-btn
startButton.addEventListener("click", function () {
    startTimer();
    showQuestion();
});
questionsDiv.addEventListener("click", function () {
    showQuestion();
})

function showScore() {
    var numQuestions = questions.length;
    var scoreText = "You answered " + numCorrect + " out of " + numQuestions + " questions correctly.";
    score.textContent = scoreText;
}

//start timer
function startTimer() {
    //hide start btn
    startButton.style.display = "none";
    //clear timer
    clearInterval(timerId);
    //update timer
    timerId = setInterval(function () {
      timeLeft--;
      timerDiv.innerHTML = "Time left: " + timeLeft + " seconds";
  
      if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
        clearInterval(timerId);
        timerDiv.innerHTML = "Game Over";
        showScore();
        document.getElementById("initials-form").style.display = "block";
      }
    }, 1000);
  }  

//display ?'s
const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["High-Tech Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Marking Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Which of the following is NOT a programming language?",
        choices: ["Javascript", "CSS", "Python", "Ruby"],
        answer: "CSS",
    },
    {
        question: "What is a variable in programming?",
        choices: ["A named value that can be changed", "A constant value that cannot be changed", "A function that performs a specific task", "A conditional statement that controls flow"],
        answer: "A named value that can be changed",
    },
    {
        question: "Which of the following is NOT a data type in JavaScript?",
        choices: ["Number", "String", "Boolean", "Float"],
        answer: "Float",
    }
]

