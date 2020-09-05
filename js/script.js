let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
}

if(playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


const computerInput = a => Math.floor(Math.random()*3 +1);

if(computerInput == '1'){
    computerMove = 'kamień';
  } else if (computerInput == '2'){
      computerMove = 'papier';
  }
  
  if(computerInput == '3'){
     computerMove = 'nożyce';
  }
