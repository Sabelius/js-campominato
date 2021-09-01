let arrBomb = [];
let numberBomb;
let questionNumber;
let explosion = false;
let playerNumber = [];
let points = 0;

while (arrBomb.length < 16) {
  numberBomb = Math.floor(Math.random() * 100) + 1;
  if (arrBomb.indexOf(numberBomb) === -1) {
    arrBomb.push(numberBomb);
  }
}
console.log(arrBomb);



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
  console.log(playerNumber);
  if (numeriInArray(arrBomb, questionNumber) == false) {
    playerNumber.push(questionNumber);
  } else if (numeriInArray(arrBomb, questionNumber) == true) {
    console.log("BOOOOOOOOOM!!! La partita è terminata!!!");
    explosion = true;
  }
}

if( playerNumber.length == (20 - 16)){
  console.log("Hai vinto0o0o0o0o0o0o!!! Hai totalizzato un punteggio di:" + points);
}

















