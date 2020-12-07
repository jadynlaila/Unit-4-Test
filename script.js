"use strict";
// setting names for players
let player1 = prompt("Player 1, what is your nickname?");
let player2 = prompt("Player 2, what is your nickname");
document.getElementById(`play1`).textContent = `${player1}`;
document.getElementById(`play2`).textContent = `${player2}`;
document.getElementById(`whosTurn`).textContent = `${player1}'s turn!`
// making variables
let gameStatus = true;
let turnCount = 1;
let squares = [document.getElementById('cell11'), document.getElementById('cell12'), document.getElementById('cell13'), document.getElementById('cell21'), document.getElementById('cell22'), document.getElementById('cell23'), document.getElementById('cell31'), document.getElementById('cell32'), document.getElementById('cell33')]
let play1WinsCount = 0;
let play2WinsCount = 0;
let finish = 0;

// will happen everytime a cell is clicked and will track whos turn it is and how many turns have gone
function turnCounter() {
    document.getElementById("turn").textContent = `Turn - ${turnCount}`;
    if (turnCount % 2 == 0) {
        document.getElementById("whosTurn").textContent = `${player1}'s turn!`
    } else {
        document.getElementById("whosTurn").textContent = `${player2}'s turn!`
    }
    turnCount++;
}


// will happen when a cell is clicked and will be their "turn"
function selectCell(cell) {
    //checking to make sure no winner has been declared
    if (gameStatus == false) {
        return;
    }
    //checking that no player has already chosen this spot
    if (document.getElementById(`cell${cell}`).classList.contains(`play1Spot`) || document.getElementById(`cell${cell}`).classList.contains(`play2Spot`)) {
        return;
    }
    turnCounter();
    //actually going to apply styles and show visible spot selection
    if (turnCount % 2 == 0) {
        document.getElementById(`cell${cell}`).textContent = "X";
        document.getElementById(`cell${cell}`).classList.add(`play1Spot`);
    } else {
        document.getElementById(`cell${cell}`).textContent = "O";
        document.getElementById(`cell${cell}`).classList.add(`play2Spot`);
    }
    checkWin();
    if (turnCount == 10 && finish == 0) {
        alert("Tie Game? Restart!")
    }
    return turnCount;

}

function checkWin() {
    if (squares[0].classList.contains(`play1Spot`) && squares[1].classList.contains(`play1Spot`) && squares[2].classList.contains(`play1Spot`)) {
        squares[0].classList.add(`winner`);
        squares[1].classList.add(`winner`);
        squares[2].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;
        return true;
    }
    if (squares[0].classList.contains(`play2Spot`) && squares[1].classList.contains(`play2Spot`) && squares[2].classList.contains(`play2Spot`)) {
        squares[0].classList.add(`winner`);
        squares[1].classList.add(`winner`);
        squares[2].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }
    if (squares[3].classList.contains(`play1Spot`) && squares[4].classList.contains(`play1Spot`) && squares[5].classList.contains(`play1Spot`)) {
        squares[3].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[5].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;

        return;
    }
    if (squares[3].classList.contains(`play2Spot`) && squares[4].classList.contains(`play2Spot`) && squares[5].classList.contains(`play2Spot`)) {
        squares[3].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[5].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }
    if (squares[6].classList.contains(`play1Spot`) && squares[7].classList.contains(`play1Spot`) && squares[8].classList.contains(`play1Spot`)) {
        squares[6].classList.add(`winner`);
        squares[7].classList.add(`winner`);
        squares[8].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;
        return;
    }
    if (squares[6].classList.contains(`play2Spot`) && squares[7].classList.contains(`play2Spot`) && squares[8].classList.contains(`play2Spot`)) {
        squares[6].classList.add(`winner`);
        squares[7].classList.add(`winner`);
        squares[8].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }
    if (squares[0].classList.contains(`play1Spot`) && squares[3].classList.contains(`play1Spot`) && squares[6].classList.contains(`play1Spot`)) {
        squares[0].classList.add(`winner`);
        squares[3].classList.add(`winner`);
        squares[6].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;
        return;
    }
    if (squares[0].classList.contains(`play2Spot`) && squares[3].classList.contains(`play2Spot`) && squares[6].classList.contains(`play2Spot`)) {
        squares[0].classList.add(`winner`);
        squares[3].classList.add(`winner`);
        squares[6].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }
    if (squares[1].classList.contains(`play1Spot`) && squares[4].classList.contains(`play1Spot`) && squares[7].classList.contains(`play1Spot`)) {
        squares[1].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[7].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;
        return;
    }
    if (squares[1].classList.contains(`play2Spot`) && squares[4].classList.contains(`play2Spot`) && squares[7].classList.contains(`play2Spot`)) {
        squares[1].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[7].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }
    if (squares[2].classList.contains(`play1Spot`) && squares[5].classList.contains(`play1Spot`) && squares[8].classList.contains(`play1Spot`)) {
        squares[2].classList.add(`winner`);
        squares[5].classList.add(`winner`);
        squares[8].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;
        return;
    }
    if (squares[2].classList.contains(`play2Spot`) && squares[5].classList.contains(`play2Spot`) && squares[8].classList.contains(`play2Spot`)) {
        squares[2].classList.add(`winner`);
        squares[5].classList.add(`winner`);
        squares[8].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }
    if (squares[0].classList.contains(`play1Spot`) && squares[4].classList.contains(`play1Spot`) && squares[8].classList.contains(`play1Spot`)) {
        squares[0].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[8].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;
        return;
    }
    if (squares[0].classList.contains(`play2Spot`) && squares[4].classList.contains(`play2Spot`) && squares[8].classList.contains(`play2Spot`)) {
        squares[0].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[8].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }
    if (squares[2].classList.contains(`play1Spot`) && squares[4].classList.contains(`play1Spot`) && squares[6].classList.contains(`play1Spot`)) {
        squares[2].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[6].classList.add(`winner`);
        weHaveAWinner(`player1`);
        finish++;
        return;
    }
    if (squares[2].classList.contains(`play2Spot`) && squares[4].classList.contains(`play2Spot`) && squares[6].classList.contains(`play2Spot`)) {
        squares[2].classList.add(`winner`);
        squares[4].classList.add(`winner`);
        squares[6].classList.add(`winner`);
        weHaveAWinner(`player2`);
        finish++;
        return;
    }

}
//171 and 188 are problem areas
function weHaveAWinner(winner) {
    if (winner == `player1`) {
        play1WinsCount++;
        console.log(play1WinsCount);
        document.getElementById(`play1Wins`).textContent = `Wins - ${play1WinsCount}`
        document.getElementById(`turn`).textContent = `${player1} Wins!`
        document.getElementById(`turn`).classList.add(`winner`);
    }
    if (winner == `player2`) {
        play2WinsCount++;
        document.getElementById(`play2Wins`).textContent = `Wins - ${play2WinsCount}`;
        document.getElementById(`turn`).textContent = `${player2} Wins!`
        document.getElementById(`turn`).classList.add(`winner`);
    }
    gameStatus = false;
    return;

}
function resetGame() {
    finish--;
    console.log(`reset`);
    for (let i = 0; i < squares.length; i++) {

        squares[i].classList.remove("winner");
        squares[i].classList.remove("winner");
        squares[i].textContent = "";
        document.getElementById(`turn`).classList.remove(`winner`);
    }

    for (let i = 0; i < 9; i++) {
        squares[i].classList.remove("play1Spot");
        console.log('hello');
        squares[i].classList.remove("play2Spot")
        console.log('hi');
    }

    gameStatus = true;
    turnCount = 1;
    document.getElementById(`whosTurn`).textContent = `${player1}'s turn!`;
}
