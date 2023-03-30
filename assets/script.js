var timeLeft = 99; //total time available
var timerId; 

//references to HTML
var startButton = document.getElementById("start-btn");
var questionsDiv = document.getElementById("questions");
var timerDiv = document.getElementById("timer")

function showQuestion() {
    var question = questions[0];
    var questionsEl = document.createElement("h2");
    questionsEl.textContent = question.question;
    questionsDiv.appendChild(questionsEl);

    question.choices.forEach(function(choice) {
        var choiceEl = document.createElement("button");
        choiceEl.textContent = choice;
        questionsDiv.appendChild(choiceEl);
        choiceEl.addEventListener("click", function() {
            if(choice === question.answer) {
                console.log("correct");
            } else {
                console.log("incorrect");
            }
        });
    });
}

//event listener for start-btn
startButton.addEventListener("click", function() {
    startTimer();
    showQuestion();
});

//start timer
function startTimer() {
    //clear timer
    clearInterval(timerId);
    //update timer
    timerId = setInterval(function() {
        timeLeft--;
        timerDiv.innerHTML = "Time left: " + timeLeft + "seconds";

        if (timeLeft <= 0) {
            clearInterval(timerId);
            timerDiv.innerHTML = "Out of time";
            showScore();
        }  
    }, 1000);
};

//display ?'s
const questions = [
    {
        question: "What does HTML stand for?",
        choices: ["High-Tech Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Marking Language"],
        answer: "Hyper Text Markup Language",
    }
]

// choiceEls.foreach(function(choiceEl) {
//     choiceEl.addEventListener("click", function () {
//         if (choiceEl.textContent === currentQuestion.answer) {
//             console.log("correct");
//         } else {
//             console.log("incorrect")
//         }
//     })
// })

// function showScore() {
//     questionsDiv.innerHTML = "Good score";
// }


// What does HTML stand for?
// a) High-Tech Markup Language
// b) Hyper Text Markup Language
// c) Hyperlinks and Text Markup Language
// d) Hyper Text Marking Language

// Which of the following is NOT a programming language?
// a) Java
// b) CSS
// c) Python
// d) Ruby

// What is a variable in programming?
// a) A named value that can be changed
// b) A constant value that cannot be changed
// c) A function that performs a specific task
// d) A conditional statement that controls program flow

// Which of the following is NOT a data type in JavaScript?
// a) Number
// b) String
// c) Boolean
// d) Float

// Answers:

// b) Hyper Text Markup Language
// b) CSS
// a) A named value that can be changed
// d) float


