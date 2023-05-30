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
    const MSG_PROMPT = "Rock, Paper, or Scissors?",
        MSG_ERROR = 'ERROR! Please choose a valid move!';

    let playerChoice = ''

    // Repeat until the player inputs a valid choice.
    while(true) {
        playerChoice = prompt(MSG_PROMPT, "Scissors").toLowerCase();

        if(playerChoiceCheck(playerChoice)) {
            break;
        } else {
            alert(MSG_ERROR);
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
    compareMoves();
}   

/*
Compare the moves between the cpu/player. 
Through this, find the winning move and pass it
to awardPoint(). Any valid input will allow a point
to be awarded.
*/
function compareMoves() {
    const MOVE_ROCK = 'rock', 
        MOVE_PAPER = 'paper', 
        MOVE_SCISSORS = 'scissors';

    let playerMoves = [user.move, cpu.move],
        winningMove = null;

    if (playerMoves.includes(MOVE_ROCK) && playerMoves.includes(MOVE_SCISSORS)) {
        winningMove = MOVE_ROCK;
    } else if (playerMoves.includes(MOVE_PAPER) && playerMoves.includes(MOVE_ROCK)) {
        winningMove = MOVE_PAPER;
    } else if (playerMoves.includes(MOVE_SCISSORS) && playerMoves.includes(MOVE_PAPER)){
        winningMove = MOVE_SCISSORS;
    }

    if(winningMove)
        //awardPoint(winningMove);

}

/*
Awards a point based on who won in comparedMoves().
Should only receive a 0 or 1 for @winner.
*/
function awardPoint(winner) {
    const MSG_WARN = `!!!!! WARNING !!!!!
    awardPoint() recieved a number other than 0 or 1!
    Number Recieved: ${winner}`;


    if(winner === 0) {
        user.score += 1;
    } else if (winner === 1) {
        cpu.score += 1;
    } else {
        console.warn(MSG_WARN);
    }
}

/*
Play as many rounds as desired.
*/
function game(){
    let repeatGame;

    do {
        do {
            playRound();
        } while (!foundWinner());

        repeatGame = playAgain();
    } while (repeatGame != 'n');
}

/*
Detect if a player has reached a score of 3. 
If so, display a message for who won & reset scores for
each player.
*/
function foundWinner () {
    let winner = 'The CPU';

    if(user.score === 3 || cpu.score === 3) {
        if(user.score === 3)
            winner = 'The Player';

        alert(`${winner} has won the game!`);

        cpu.score = user.score = 0;

        return true;
    }

    return false;
}


/*
Has the user input if they want to play again.
*/
function playAgain(){
    let userChoice;

    do {
        userChoice = prompt("Would you like to play again? Y/N", "Y").toLowerCase();
    } while (userChoice != 'y' && userChoice != 'n');

    return userChoice;
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
game();