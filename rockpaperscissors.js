const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  //condition check for valid input
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ) {
    return userInput;
  } 
  else {
    console.log('Error!');
  }
  };
  //Function test 
  //console.log(getUserChoice('rock'));
  //computer choice
  const getComputerChoice = () => {
      let results = Math.floor(Math.random() * 3);
      if (results === 0){
        return 'rock';
      }else if(results === 1){
        return 'paper';
      }else{
        return 'scissors';
      }
    }
    // console.log(getComputerChoice('rock'));
     //winner det ermination function
     const determineWinner=(userChoice, computerChoice) => {
       if (userChoice === computerChoice){
         return'its a tie!';
       }
       if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if(userChoice === 'bomb'){
      return 'You won!';
    } 
  
     }
  //console.log(determineWinner('paper', 'scissors'));
  //function to determine winner
  const playGame = () => {
     const userChoice = getUserChoice('bomb');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
  console.log(playGame());
  
  