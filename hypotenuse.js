const sides = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outputAnswer = document.querySelector("#output-answer")


function calculateSumOfSquares(a, b) {
    const SumOfSquares = a*a + b*b
    return SumOfSquares
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    console.log(lengthOfHypotenuse)
    outputAnswer.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)