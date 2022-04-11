// Display results
const computerChoiceResult = document.getElementById("computer-choice");
const userChoiceResult = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const roundsDisplay = document.getElementById("rounds");
const wonDisplay = document.getElementById("won");
const avarageDisplay = document.getElementById("avarage");

//
const possibleChoices = document.querySelectorAll("button");


let userChoice
let computerChoice
let result
let rounds = 0
let won = 0
let avarage 


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceResult.innerHTML = userChoice
    randomComputerChoice()
    getResult()
    if(result === "you win!") {
        wonCounter()
        console.log(won);
        wonDisplay.innerHTML = won
    }
    roundCounter()
    roundsDisplay.innerHTML = rounds
    avarageDisplay.innerHTML = Math.floor((won / rounds) * 100) + "%" 
}))


function roundCounter() {
    rounds++
}

function wonCounter() {
    won++
}

function randomComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1  //number = 1, 2, 3

    if(random === 1) {
        computerChoice = "rock"
    }
    if(random === 2) {
        computerChoice = "paper"
    }
    if(random === 3) {
        computerChoice = "scissors"
    }
    computerChoiceResult.innerHTML = computerChoice
}


function getResult() {
    if(userChoice === computerChoice) {
        result = "draw"
    }
    if(userChoice === "scissors" && computerChoice === "paper") {
        result = "you win!"
    }
    if(userChoice === "scissors" && computerChoice === "rock") {
        result = "you lose!"
    }
    if(userChoice === "rock" && computerChoice === "scissors") {
        result = "you win!"
    }
    if(userChoice === "rock" && computerChoice === "paper") {
        result = "you lose!"
    }
    if(userChoice === "paper" && computerChoice === "rock") {
        result = "you win!"
    }
    if(userChoice === "paper" && computerChoice === "scissors") {
        result = "you lose!"
    }
    resultDisplay.innerHTML = result
}