function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"];
    let compPick = compChoice[Math.floor(Math.random() * compChoice.length)];
    return compPick;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win!";
    } else {
        return "It's a draw.";
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
