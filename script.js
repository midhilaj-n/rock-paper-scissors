const getComputerChoice = () => {
    const computerChoice =  Math.round(Math.random() * 2);
    if(computerChoice === 0){
        console.log("Rock");

    }else if(computerChoice === 1){
        console.log("Paper");
    }else{
        console.log("Scissor");
    }
}

getComputerChoice()