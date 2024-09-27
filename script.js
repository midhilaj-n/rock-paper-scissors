let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const computerChoice =  Math.round(Math.random() * 2);
    let result;
    if(computerChoice === 0){
        result = `Rock`

    }else if(computerChoice === 1){
        result = `Paper`;
    }else{
        result = `Scissor`;
    }

    return result.toLowerCase();
}

const getHumanChoice = () => {
    const choice = prompt("Rock. Paper. Scissor?");
    return `You: ${choice}`;

}





const playRound = (humanChoice, computerChoice) => {
    const lowerCase = humanChoice.toLowerCase();
    let result;
    if(humanChoice === computerChoice){
        result = `Tie.`
    }
    
    else if(lowerCase === 'rock' && computerChoice === 'paper'){
        computerScore++;
        result = `Computer wins. Paper beats Rock.
        Score: You: ${humanScore} & Computer: ${computerScore}`
    }
    
    else if(lowerCase === 'rock' && computerChoice === 'scissor'){
        humanScore++;
        result = `You wins. Rock beats Scissor.
        Score: You: ${humanScore} & Computer: ${computerScore}`
    }
    
    else if(lowerCase === 'paper' && computerChoice == 'rock'){
        humanScore++;
        result = `You wins. Paper beats Rock.
        Score: You: ${humanScore} & Computer: ${computerScore}`
    }
    
    else if(lowerCase === 'paper' && computerChoice === 'scissor'){
        computerScore++;
        result = `Computer wins. Scissor beats Paper.
        Score: You: ${humanScore} & Computer: ${computerScore}`
    }

    else if(lowerCase === 'scissor' && computerChoice === 'rock'){
        computerScore++
        result = `Computer wins. Rock beats Scissor.
        Score: You: ${humanScore} & Computer: ${computerScore}`
    }

    else if(lowerCase === 'scissor' && computerChoice === 'paper'){
        humanScore++
        result = `You wins. Scissor beats Paper.
        Score: You: ${humanScore} & Computer: ${computerScore}`
    }else{
        result = 'Invalid result try again with correct input!'
    }

    return result;


}

