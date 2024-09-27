const getComputerChoice = () => {
    const computerChoice =  Math.round(Math.random() * 2);
    if(computerChoice === 0){
        console.log("Computer: Rock");

    }else if(computerChoice === 1){
        console.log("Computer: Paper");
    }else{
        console.log("Computer: Scissor");
    }
}

const getHumanChoice = (choice) => {
    choice = prompt("Rock. Paper. Scissor?");
    console.log(`You: ${choice}`)

}
getHumanChoice()
getComputerChoice()
