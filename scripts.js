function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"];
    let compPick = compChoice[Math.floor(Math.random() * compChoice.length)];
    return compPick;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return 4;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 3;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 2;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1;
    } else if (playerSelection === computerSelection) {
        return 0;
    } else {
        return -1;
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerInput = prompt("Enter rock, paper, or scissors!");
        const playerSelection = playerInput.toLowerCase();
        computerSelection = computerPlay();
         if (playRound(playerSelection, computerSelection) === 1) {
            playerScore++;
            console.log("You won this round.");
            console.log("player score = "+ playerScore +"\ncompScore = " + compScore);
        } else if (playRound(playerSelection, computerSelection) === 2) {
            compScore++;
            console.log("You lose! rock beats scissors.");
            console.log("player score = "+ playerScore +"\ncompScore = " + compScore);
        } else if (playRound(playerSelection, computerSelection) === 3) {
            compScore++;
            console.log("You lose! scissors beats paper.");
            console.log("player score = "+ playerScore +"\ncompScore = " + compScore);
        } else if (playRound(playerSelection, computerSelection) === 4) {
            compScore++;
            console.log("You lose! Paper beats rock.");
            console.log("player score = "+ playerScore +"\ncompScore = " + compScore);
        } else if (playRound(playerSelection, computerSelection) === 0) {
            console.log("It's a draw, try again");
            console.log("player score = "+ playerScore +"\ncompScore = " + compScore);
        } else if (playRound(playerSelection, computerSelection) === -1) {
            console.log("Invalid input!");
            i--;
        }
    }
    if (playerScore > compScore) {
        console.log("You win the game!");
    } else if (playerScore === compScore) {
        console.log("It's a tie.");
    } else {
        console.log("You lose, lol.")
    }
}
game()