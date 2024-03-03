const questions = [
    {
        question: "What is one way to reduce e-waste?",
        answers: {
            a: "Throwing old electronics in the trash",
            b: "Donating old devices",
            c: "Leaving electronics on standby mode"
        },
        correctAnswer: "b"
    },
    {
        question: "How can you reuse old electronics?",
        answers: {
            a: "Sell them to a recycling center",
            b: "Use them for spare parts",
            c: "Throw them in a landfill"
        },
        correctAnswer: "b"
    },
    {
        question: "What should you do with old electronics you no longer need?",
        answers: {
            a: "Recycle them at a certified facility",
            b: "Bury them in your backyard",
            c: "Leave them on the street for someone else to take"
        },
        correctAnswer: "a"
    }
];

const quizContainer = document.getElementById("quiz-container");
const startButton = document.getElementById("start-btn");
const submitButton = document.getElementById("submit-btn");
submitButton.style.display = "none";
function startQuiz() {
    let output = [];
    questions.forEach((currentQuestion, questionIndex) => {
        let answers = [];
        for (const option in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionIndex}" value="${option}">
                    ${option}: ${currentQuestion.answers[option]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
        );
    });
    quizContainer.innerHTML = output.join("");
    startButton.style.display = "none";
    submitButton.style.display = "";
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        const selector = `input[name=question${questionIndex}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionIndex].style.color = "green";
        } else {
            answerContainers[questionIndex].style.color = "red";
        }
    });
    quizContainer.innerHTML += `<h2>You got ${numCorrect} out of ${questions.length} questions correct!</h2>`;
}

startButton.addEventListener("click", startQuiz);
quizContainer.addEventListener("submit", showResults) || submitButton.addEventListener("submit",showResults)    ;