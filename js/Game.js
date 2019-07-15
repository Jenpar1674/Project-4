// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * Game.js */
// //Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 
class Game {
    constructor() {
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = null;
    }
  
    //Creates phrases and returns for use in game
    
   createPhrases() {
    
   
		let phrases = [
            new Phrase('blondes have more fun'),
            new Phrase('no way jose'),
            new Phrase('say what chicken butt'),
            new Phrase('gag me with a spoon'),
            new Phrase('word up'),

		];
        return phrases
    }	
    
     
    //hides overlay to diplay phrase and key board
    startGame() {
      const overlay = document.getElementById('overlay');
      const phrase = this.getRandomPhrase();
      this.activePhrase = phrase;
      phrase.addPhraseToDisplay();
      overlay.style.display = "none";
    }
  
   
    //Selects random phrase from phrases property
    
    getRandomPhrase() {
      const num = Math.floor(Math.random() * Math.floor(4));
  
      return this.phrases[num];
    }
  
    
    //Handles onscreen keyboard button clicks
    
    handleInteraction(button) {
      const letter = button.textContent;
      button.setAttribute('disabled', '');
      if (this.activePhrase.checkLetter(letter)) {
        this.activePhrase.showMatchedLetter(letter);
        button.classList.add('chosen');
        this.checkForWin();
      } else {
        button.classList.add('wrong');
        this.removeLife();
      }
    }
  
    
    //Increases the value of the missed property
    //Removes a life from the scoreboard
    //Checks if player has remaining lives and ends game if player is out
    
    removeLife() {
      const lives = document.querySelectorAll('.tries');
      lives[this.missed].querySelector('img').src = 'images/lostHeart.png';
      this.missed += 1;
      if (this.missed === 5) {
        game.gameOver(false);
      }
    }
  
    
    //Checks for winning move
    
    checkForWin() {
      const hiddenLetters = document.querySelectorAll('.hide');
      if (hiddenLetters.length > 0) {
        return false;
      } else {
        game.gameOver(true);
      }
    }
  
    
    //Displays game over message
    // @param (HTMLButtonElement) button - The clicked button element
    
    gameOver(gameWon) {
      const overlay = document.getElementById('overlay');
      const message = document.getElementById('game-over-message');
      const letters = document.querySelectorAll('#phrase li');
      const keys = document.querySelectorAll('.key');
      const lives = document.querySelectorAll('.tries');
      overlay.style.display = "flex";
      overlay.classList = '';
  
      if (gameWon) {
        overlay.classList.add('win');
        message.innerHTML = ' Nicely Done! You WIN!';
      } else {
        overlay.classList.add('lose');
        message.innerHTML = 'So Sorry! Better luck next time!';
      }
  
      this.missed = 0;
  
      letters.forEach(function (letter) {
        letter.remove();
      });
  
      keys.forEach(function (key) {
        key.classList = 'key';
        key.removeAttribute('disabled');
      });
  
      lives.forEach(function (life) {
        life.querySelector('img').src = 'images/liveHeart.png'
      })
    }
  }





            
        
    
        	

    
          
        


    





    