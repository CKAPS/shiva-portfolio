/*
The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attempts to 
guess the number.
*/


//Assume the player din't guess correct
var correctGuess = false;

//Generate a random number between 1 and 6
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it ?');

/*
Test to see if the player :-
1) Is Correct
2) Guesses too high
3) Guess too Loo

*/
if(parseInt(guess)===randomNumber){
  correctGuess = true;
}else if(parseInt(guess) > randomNumber ){
  var guessMore = prompt('The number is smaller than your guess. What is the number ?');
  if(parseInt(guessMore)===randomNumber){
    correctGuess = true;
  }
}
else if(parseInt(guess) < randomNumber){
  var guessLess = prompt('The number is larger than your guess. What is the number ?');
  if(parseInt(guessLess)===randomNumber){
    correctGuess = true;
  }
}
  
// Test if the player is correct and output the response.
if(correctGuess){
  alert('You guessed the number');
}else{
  alert('Oops! The number was ' + randomNumber);
}
