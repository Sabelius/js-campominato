let arrBomb = [];
let numberBomb = 16;
let questionNumber;
let explosion = false;
let playerNumber = [];

function getRandomNumbers(bombLength){
  let array = [];
  while (array.length < bombLength) {
    numberBomb = Math.floor(Math.random() * 100) + 1;
    if (array.indexOf(numberBomb) === -1) {
      array.push(numberBomb);
    }
  }
  return array;
}

arrBomb = getRandomNumbers(numberBomb);
console.log("Le bombe sono i seguenti numeri: " + arrBomb);



function numeriInArray(array, element) {
  let i = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return true;
    }
  }
  return false;
}



while (playerNumber.length < (20 - 16) && explosion == false) {
  questionNumber = parseInt(prompt("Inserisci un numero:"));
  if (numeriInArray(arrBomb, questionNumber) == false) {
    if(numeriInArray(playerNumber, questionNumber) == false && questionNumber >= 1 && questionNumber <=100){
      playerNumber.push(questionNumber);
    }else{
      console.log("Inserisci un numero valido!!!");
    }
  } else if (numeriInArray(arrBomb, questionNumber) == true) {
    console.log("BOOOOOOOOOM!!! La partita è terminata!!!");
    explosion = true;
  } 
  console.log(playerNumber);
}

console.log("Hai realizzato un punteggio di: " + playerNumber.length);

if( playerNumber.length == (20 - 16)){
  console.log("Hai vinto0o0o0o0o0o0o!!!");
}


















