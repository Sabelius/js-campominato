let livello;
let minRangeNumber;
let randomMaxNumber;
let arrBomb = [];
let numberBomb = 16;
let questionNumber;
let explosion = false;
let playerNumber = [];

livello = parseInt(prompt("Inserisci un livello di difficoltà tra 0, 1 e 2:"));
if (livello != 0 && livello != 1 && livello != 2) {
  livello = alert("Inserisci un livello di difficoltà esistente!!!");
}

switch (livello) {
  case 0:
    minRangeNumber = 15;
    randomMaxNumber = 100;
  break;
  case 1:
    minRangeNumber = 14;
    randomMaxNumber = 80;
  break;
  case 2:
    minRangeNumber = 12;
    randomMaxNumber = 50;
  break;
}


function getRandomNumbers(bombLength) {
  let array = [];
  while (array.length < bombLength) {
    numberBomb = Math.floor(Math.random() * randomMaxNumber) + 1;
    if (array.indexOf(numberBomb) === -1) {
      array.push(numberBomb);
    }
  }
  return array;
}

arrBomb = getRandomNumbers(numberBomb);
console.log("Le bombe sono i seguenti numeri: " + arrBomb);



function numbersInArray(array, element) {
  let i = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == element) {
      return true;
    }
  }
  return false;
}



while (playerNumber.length < (20 - minRangeNumber) && explosion == false) {
  questionNumber = parseInt(prompt("Inserisci un numero:"));
  if (numbersInArray(arrBomb, questionNumber) == false) {
    if (numbersInArray(playerNumber, questionNumber) == false && questionNumber >= 1 && questionNumber <= randomMaxNumber) {
      playerNumber.push(questionNumber);
    } else {
      console.log("Inserisci un numero valido!!!");
    }
  } else if (numbersInArray(arrBomb, questionNumber) == true) {
    console.log("BOOOOOOOOOM!!! La partita è terminata!!!");
    explosion = true;
  }
  console.log(playerNumber);
}

console.log("Hai realizzato un punteggio di: " + playerNumber.length);

if (playerNumber.length == (20 - minRangeNumber)) {
  console.log("Hai vinto0o0o0o0o0o0o!!!");
}


















