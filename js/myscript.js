let level;
let maxRangeNumber;
let minRangeNumber;
let randomMaxNumber;
let arrBomb = [];
let numberBomb = 16;
let questionNumber;
let explosion = false;
let playerNumber = [];

level = parseInt(prompt("Inserisci un livello di difficoltà tra 0, 1 e 2:"));
document.getElementById("difficoltà").innerHTML = level;
if (level != 0 && level != 1 && level != 2) {
  document.getElementById("avviso").innerHTML = "Inserisci un livello di difficoltà esistente!!!";
}


  switch (level) {
    case 0:
      maxRangeNumber = 20;
      minRangeNumber = 16;
      randomMaxNumber = 100;
    break;
    case 1:
      maxRangeNumber = 20;
      minRangeNumber = 14;
      randomMaxNumber = 80;
    break;
    case 2:
      maxRangeNumber = 20;
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



while (playerNumber.length < (maxRangeNumber - minRangeNumber) && explosion == false) {
  questionNumber = parseInt(prompt("Inserisci un numero:"));
  if (numbersInArray(arrBomb, questionNumber) == false) {
    if (numbersInArray(playerNumber, questionNumber) == false && questionNumber >= 1 && questionNumber <= randomMaxNumber) {
      playerNumber.push(questionNumber);
    } else {
      alert("Inserisci un numero valido!!!");
    }
  } else if (numbersInArray(arrBomb, questionNumber) == true) {
    console.log("BOOOOOOOOOM!!! La partita è terminata!!!");
    document.getElementById("sconfitta").innerHTML = "BOOOOOOOOM!!! La partita è terminata!!!";
    document.getElementById("bombe").innerHTML = "Le bombe erano i seguenti numeri: " + arrBomb;
    explosion = true;
  }
  console.log(playerNumber);
  document.getElementById("numeriscelti").innerHTML = playerNumber;
}

console.log("Hai realizzato un punteggio di: " + playerNumber.length);
document.getElementById("punteggio").innerHTML = playerNumber.length;

if (playerNumber.length == (maxRangeNumber - minRangeNumber)) {
  console.log("Hai vinto0o0o0o0o0o0o!!!");
  document.getElementById("vittoria").innerHTML = "Hai vinto0o0o0oo0o0o0o0o!!!";
}


















