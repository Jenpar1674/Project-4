/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 

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
    
    getRandomPhrase() {
        let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
        return this.phrases[number];
    }
    

     startGame() {

        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        
        this.activePhrase.addPhraseToDisplay();

} ;   
            
    
    checkForWin(){
        let phraseLetter = $('.letter');	
		let matchedLetter = $('.show');	
        if(matchedLetter.length === phraseLetter.length) {
            return true;
        } else {
            return false;
        }
	}	

    };


    removeLife() ;{
        this.missed += 1;
		let liveHrt = $('.tries');
		let liveHrtImg = liveHrt.firstChild;
		liveHrt.classList.remove('tries');
		liveHrtImg.src = "images/lostHeart.png";	
		if(this.missed === 5) {
			this.gameOver(false);
		
	}	


    }


    gameOver() ;{





    };;;
    






 