// var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();

var resultTextBox = document.getElementById('result');
var computerResult = document.getElementById('computer');  
var userResult = document.getElementById('user');  

function play() {
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random(); 

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("User    : " + userChoice);
    console.log("Computer: " + computerChoice);
    
    var compare = function (choice1, choice2) {
        choice1 = choice1.toLowerCase()
        if (choice1 === choice2) {
            return "The result is a tie!"
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "Rock wins!"
            } else {
                return "Paper wins!"
            }
        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "Paper wins!"
            } else {
                return "Scissors wins!"
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "Rock wins!"
            } else {
                return "Scissors wins!"
            }
        } else {
            return "Invalid choice '" + choice1 + "'";
        }
    };
    var result = compare(userChoice, computerChoice);

    resultTextBox.innerHTML = 'Result: ' + result;
    userResult.innerHTML = 'You chose ' + userChoice;
    computerResult.innerHTML = 'The computer chose ' + computerChoice;
}