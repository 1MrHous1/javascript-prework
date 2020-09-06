//function printMessage(msg){
	//let div = document.createElement('div');
	//div.innerHTML = msg;
	// document.getElementById('messages').appendChild(div);
//}
// function clearMessages(){
// 	document.getElementById('messages').innerHTML = '';
// }
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
function displayResult(argComputerMove, argPlayerMove){
    console.log('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  

      if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        console.log('Ty wygrywasz!');
      }
      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        console.log('Ty wygrywasz!');
      }
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        console.log('Ty wygrywasz!');
      }
      
      else if (argComputerMove == argPlayerMove){
        console.log('Remis!');
      }
    
      else {
        console.log('Tym razem przegrywasz :(');
      }
  }


let playerMove = getMoveName(prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."));
console.log("Gracz wpisał: " + playerMove);

let randomNumber =  Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to:' + randomNumber)


let computerMove = getMoveName(randomNumber);
console.log('Ruch komputera to: ' + computerMove)


//printMessage("Twój ruch to: " + PlayerMove);


  
console.log(displayResult(computerMove,playerMove));
console.log('moves:', computerMove, playerMove);