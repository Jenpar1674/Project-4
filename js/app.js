/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let keyPres = []; 
const $menu = $('#overlay');
let $menuH1 = $('#overlay h1');
const $keyButton = $('.key');

//Starts Game

$('#btn__reset').click( () => {
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

// Handles onscreen keyboard button clicks

$keyButton.click( (e) => {
  let button = e.target;
  game.handleInteraction(button);
});

// Handles keyboard key release

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

 
})
