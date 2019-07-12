/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const phrase = new Phrase('Life is like a box of chocolates');

// const logPhrase = (phrase)=>{
//     console.log(`Phrase - phrase: ${phrase.phrase}`);

// };
//let game = null;
//let phrase = null;
let game;
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


 $('#btn__reset').on('click',()=>{
    
    game = new Game();
    game.startGame();
  });
 
 
  $('#qwerty').on('click',()=>{

    const e = event.target;
    if (e.classList.contains('key')) {
    game.handleInteraction(e)
    };   

});
//game.phrases.forEach((phrase, index)=>{


//console.log(`Phrase - phrase: ${phrase.phrase}`)})