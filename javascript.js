/*
Randomly select between
'Rock', 'Paper', 'Scissors',
for the computer to utilize via returning.

Utilizes cpuRandom to choose between 1-3.
*/
function getComputerChoice(){
    switch(cpuRandom()) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
        default:
            return 'ERROR! SWITCH NOT BETWEEN 1-3!!!!';
    }
}

/*
Return a number between 1 - 3.
Note: The + 1 at the end allows it to be 1 - 3.
*/
function cpuRandom() {
    return Math.floor(Math.random() * 3) + 1;
}

/*
Acquires & returns the players choice.
*/
function playerSelection(){
    let playerChoice = '',
        msg_Prompt = "Rock, Paper, or Scissors?",
        msg_Error = 'ERROR! Please choose a valid move!';

    // Repeat until the player inputs a valid choice.
    while(true) {
        playerChoice = prompt(msg_Prompt, "Scissors").toLowerCase();

        if(playerChoiceCheck(playerChoice)) {
            break;
        } else {
            alert(msg_Error);
        }
    }

    return playerChoice;
}

/*
Validate if the player choose an acceptable move. 
*/
function playerChoiceCheck(choice) {
    let validChoices = ['rock', 'paper', 'scissors'];
    return validChoices.includes(choice);

}

/*
Play a single round of the game.
*/
function playRound() {
    cpu.move = getComputerChoice();
    user.move = playerSelection();

}   

/*
Play as many rounds as desired.
*/
function game(){

}

/*
Object Constructor to be utilized by the PC and CPU. 
*/
function player(type) {
    this.type = type;
    this.move = 'N/A';
    this.score = 0;
}

let user = new player('user');
let cpu = new player('cpu');
playRound();