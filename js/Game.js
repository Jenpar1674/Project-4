/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 
        //creates game class and phrases 
class Game{

    constructor() {
        this.missed = 0;
        this.activePhrase = null;
        this.phrases = [
            new Phrase ("Your smile is an umbrella"),
            new Phrase ("Dont burn your bridges"),
            new Phrase ("Blondes have more fun"),
            new Phrase ("Home is where the heart is"),
            new Phrase ("Dont count your chickens before they hatch")
         ];
         
        

    }
    

    //randomly selects a phrase 

    getRandomPhrase() {
        let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
        return this.phrases[number];
    }
    


     
  // removes overlay and displays random phrase 
     startGame() {

        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        
        this.activePhrase.addPhraseToDisplay();

}   


// Handles user interaction 

handleInteraction(button) {
    let $letter = $(button).text();
    $(button).prop('disabled', true);
    if ( this.activePhrase.checkLetter($letter) ) {
      this.activePhrase.showMatchedLetter($letter);
      $(button).addClass('chosen');
    }
    else {
      this.removeLife();
      $(button).addClass('wrong');
    }
    if ( this.checkForWin() ) {
      this.gameOver();
    }
}         
    

//checks for winning move
    checkForWin(){
        let phraseLetter = $('.letter');	
		let matchedLetter = $('.show');	
        if(matchedLetter.length === phraseLetter.length) {
            return true;
        } else {
            return false;
        }
	}	

    
//increases value of a missed property. removes a life from scoreboard.
//checks for remaining lives and ends game if player is out

    removeLife() {
        this.missed += 1;
        if ( this.missed == 1 ) {
          $('.tries:eq(4) img').attr('src','images/lostHeart.png');
        }
        if ( this.missed == 2 ) {
          $('.tries:eq(3) img').attr('src','images/lostHeart.png');
        }
        if ( this.missed == 3 ) {
          $('.tries:eq(2) img').attr('src','images/lostHeart.png');
        }
        if ( this.missed == 4 ) {
          $('.tries:eq(1) img').attr('src','images/lostHeart.png');
        }
        else if( this.missed == 5 ) {
          $('.tries:eq(0) img').attr('src','images/lostHeart.png');
          this.gameOver();
        }
      }


//displays game over message
    gameOver(gameWon) 
        {
        
            $("#overlay").fadeIn("slow");
        if (gameWon==="lost") {

            $("#overlay h1").text('You Lose');
            $("#overlay").addClass('lose').removeClass('start');

        }else if (gameWon==='won'){
            $("#overlay h1").text('You Win')
            $("#overlay").addClass('win').removeClass('start');
        }
        }

        

        resetGame () {
            /* reset the gameboard between games: */
            /* Reset the Start screen with original background color */
            /* Remove all `li` elements from the Phrase `ul` element. */
            /* Enable all of the onscreen keyboard buttons and update each to use the `key` CSS class, and not use the `chosen` or `wrong` CSS classes. */
            /* Reset all of the heart images (i.e. the player's lives) in the scoreboard */
            const startScreen = document.querySelector('#overlay');	
            startScreen.classList.remove('win', 'lose');
            startScreen.classList.add('start');
            
            const ul = document.querySelector('#phrase ul');	
            ul.innerHTML = "";	
            
            const listKeys = document.querySelectorAll('.key');
              for (let i = 0; i < listKeys.length; i++) {
            listKeys[i].classList.remove('chosen', 'wrong');
            listKeys[i].disabled = false;
            }
            
            const hearts = document.querySelectorAll('#scoreboard ol li');
            for (let i = 0; i < hearts.length; i++) {
                if (hearts[i].classList != 'tries')	{
                    hearts[i].classList.add('tries');
                    hearts[i].firstChild.src = 'images/liveHeart.png';
                }	   
            }
        }	

    
          
        


    





    }