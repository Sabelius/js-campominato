let arrBomb = [];
let numberBomb;
let questionNumber;
let playerNumber = [];
let points;
console.log(arrBomb);

while (arrBomb.length < 16) {
  numberBomb = Math.floor(Math.random() * 100) + 1;
  if (arrBomb.indexOf(numberBomb) === -1) {
    arrBomb.push(numberBomb);
  }
}
console.log(arrBomb);


function numeriInArray (array, elemento){
  let i = 0;
  if(array[i] == elemento){
    return true;
  }
  return false;
}


while (playerNumber.length < (100 - 16)) {
  questionNumber = parseInt(prompt("Inserisci un numero:"));
  if(numeriInArray(arrBomb, questionNumber) == false){
    playerNumber.push(questionNumber);
  }else if(numeriInArray(arrBomb, questionNumber) == true){
    console.log("BOOOOOOOOOM!!!");
  }
}










