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
Returns the players selection.
*/
function playerSelection(){

}

/*
Returns the computers selection.
*/
function computerSelection(){

}

/*
Play a single round of the game.
*/
function playRound() {
    console.log(getComputerChoice());
}   

/*
Play as many rounds as desired.
*/
function game(){

}

/*
Object Constructor to be utilized by the PC and CPU. 
*/
function player(type, move) {
    this.type = type;
    this.move = move;
    this.score = 0;
}


playRound();