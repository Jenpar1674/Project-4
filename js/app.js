/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let keyPressed = []; //Empty array used to track physical keyboard entries
const $menu = $('#overlay');
let $menuH1 = $('#overlay h1');
const $keyButton = $('.key');
/*
* Initialize a new instance of the game and start when user clicks 'Start Game'
*/
$('#btn__reset').click( () => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
/*
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
$keyButton.click( (e) => {
  let button = e.target;
  game.handleInteraction(button);
});
/*
* Handles keyboard key release
*/
$(document).keyup( (e) => {
  let keyPress = e.key;
  if ( $menu.is(':visible') ) {
    e.preventDefault;
  }
  else if ( !keyPressed.includes(keyPress) ) {
    $keyButton.each( (index, key) => {
      if ( $(key).text() === keyPress ) {
        game.handleInteraction(key);
      }
    });
    keyPressed.push(keyPress);
  }
});
//const phrase = new Phrase('Life is like a box of chocolates');

// const logPhrase = (phrase)=>{
//     console.log(`Phrase - phrase: ${phrase.phrase}`);

// };
//let game = null;
//let phrase = null;
//let game;
// game = new Game ();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// game.getRandomPhrase().addPhraseToDisplay();
// logPhrase(game.getRandomPhrase());  
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
//app.js to create a new instance of the Game class and 

//add event listeners for the start button and onscreen keyboard buttons.


//  $('#btn__reset').on('click',()=>{
    
//     game = new Game();
//     game.startGame();
//   });
 
 
//   $('#qwerty').on('click',()=>{

//     const e = event.target;
//     if (e.classList.contains('key')) {
//     game.handleInteraction(e)
//     };   

// });
// //game.phrases.forEach((phrase, index)=>{


//console.log(`Phrase - phrase: ${phrase.phrase}`)})