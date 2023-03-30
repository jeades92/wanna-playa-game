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
    },
    {
        question: "Which of the following is NOT a programming language?",
        choices: ["Javascript", "CSS", "Python", "Ruby"],
        answer: "CSS",
    },
    {
        question: "What is a variable in programming?",
        choices: ["A named value that can be changed", "A constant value that cannot be changed", "A function that performs a specific task", "A conditional statement that controls program flow"],
        answer: "A named value that can be changed",
    },
    {
        question: "Which of the following is NOT a data type in JavaScript?",
        choices: ["Number", "String", "Boolean", "Float"],
        answer: "Float",
    }
]

