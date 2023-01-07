const quizForm = document.querySelector(".quiz-form")
const submitButton = document.querySelector("#submit-answer-button")
console.log(quizForm, submitButton)
const output = document.querySelector("#output")

const correctAnswers = ["90°", "right-angled"]

function calculateScore() {
let score = 0
let index = 0
const formResults = new FormData(quizForm)
for(let value of formResults.values()){
    if(value===correctAnswers[index]) {
        score = score + 1;

    }
    index ++;
}
output.innerText = "your score is " + score
}


submitButton.addEventListener("click", calculateScore)