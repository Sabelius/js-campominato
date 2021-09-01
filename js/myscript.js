let arrBomb = [];
let numberBomb;
let questionNumber;
let playerNumber = [];
let points;
console.log(arrBomb);

function getRandomNumber(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}


for (i = 1; i <= 16; i++) {
  numberBomb = getRandomNumber(1, 100);
  arrBomb.push(numberBomb);
}

console.log(arrBomb);








