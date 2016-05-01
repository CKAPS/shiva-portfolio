//Generate a random number between Lower Limit and Upper Limit
function generateRandomNumber(upper,lower){
  if(isNaN(upper) || isNaN(lower)){
    throw new Error('not a numbers');
  }
  var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return randomNumber;
}



//Generate Random Number Between 1 to 6
function generateRandomNumberBetween1_6(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}



//alert(generateRandomNumberBetween1_6());
//console.log(generateRandomNumberBetween1_6());
//var dieRoll = generateRandomNumberBetween1_6();

console.log(generateRandomNumber('nine',10));
console.log(generateRandomNumber(60,60));
console.log(generateRandomNumber(600,600));
console.log(generateRandomNumber(6000,6000));