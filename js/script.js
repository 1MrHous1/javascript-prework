

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	// document.getElementById('messages').appendChild(div);
}
// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }



let playerMove = getMoveName(prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."));
console.log("Gracz wpisał: " + argplayerMove);

let randomNumber =  Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczna to:' + randomNumber)


let computerMove = getMoveName(randomNumber);
printMessage('Ruch komputera to: ' + computerMove)

function getMoveName(argMoveId){

    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    }else if (argMoveId == 3){
        return 'nożyce';
    }  else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }
  }

printMessage("Twój ruch to: " + PlayerMove);


  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  

      if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
      }
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
      }
      
      else if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
      }
    
      else {
        printMessage('Tym razem przegrywasz :(');
      }
  }
  console.log(displayResult());
  console.log('moves:', argComputerMove, argPlayerMove);

