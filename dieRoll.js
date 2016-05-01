/*

Take an input 1 from the user. 
Take an input 2 from the user. 
Print out a random number between the input 1 and input 2.

*/

var diceSides = prompt('Enter the number of sides in the dice you are holding');
var dieRoll = Math.floor(Math.random() * diceSides)+1;
alert('Here is a random number from you from a Dice Roll' + dieRoll);
