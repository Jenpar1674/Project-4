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
        let randomIndex = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[randomIndex];
        return randomPhrase;
      }
      /*
     * Begins game by transitioning from the overlay and selecting a random phrase
     * and displaying it to user.  Also calls the game reset method and refreshes
     * the keyPressed array to be empty, which prepares it to accept to new
     * physical keyboard input entries from the user
     */
     startGame() {
       $menu.slideUp();
       game.gameReset();
       keyPressed.length = 0;
       this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
     }
     /*
     * Handles all user interaction and associated methods when a user
     * selects a letter: captures letter, checks against phrase,
     * displays if matched, removes life if not, checks if game is won,
     * checks if game is over
     */
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
     /*
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
     won
     */
     checkForWin() {
      if ( $('.hide').length > 0 ) {
        return false;
      }
      else {
        return true;
      }
    }
     /*
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     * Method is constructed such that the life loss transition is from right to left
     */
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
     /*
     * Displays game over message + effect transition
     * @param {boolean} gameWon - Whether or not the user won the game
     */
     gameOver() {
       $menu.slideDown();
       if ( this.missed < 5 && this.checkForWin() ) {
         $menu.removeClass('start').addClass('win').css("background-color", "#14a76c");
         $menuH1.text('Congrats, you win!');
       }
       else {
         $menu.removeClass('start').addClass('lose').css("background-color", "#D94545");;
         $menuH1.text("You're out of lives, better luck next time!");
       }
       /*
       * When game is complete, reset the game board so that clicking
       * 'start game' will load a new game
       */
     }
     gameReset() {
       $('#phrase ul li').remove();
       $keyButton.each( (index, key) => {
         $(key).prop('disabled', false);
         $(key).removeClass('chosen');
         $(key).removeClass('wrong');
         $(key).addClass('key');
       });
       $('.tries img').each( (index, img) => {
         $(img).attr('src','images/liveHeart.png');
       });
       $menu.removeClass('win').removeClass('lose');
     }
    }
    
//     getRandomPhrase() {
//         let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
//         return this.phrases[number];
//     }
    

//      startGame() {

//         $('#overlay').hide();
//         this.activePhrase = this.getRandomPhrase();
        
//         this.activePhrase.addPhraseToDisplay();

// }   
// handleInteraction(button) {
//     let $letter = $(button).text();
//     $(button).prop('disabled', true);
//     if ( this.activePhrase.checkLetter($letter) ) {
//       this.activePhrase.showMatchedLetter($letter);
//       $(button).addClass('chosen');
//     }
//     else {
//       this.removeLife();
//       $(button).addClass('wrong');
//     }
//     if ( this.checkForWin() ) {
//       this.gameOver();
//     }
// }         
    
//     checkForWin(){
//         let phraseLetter = $('.letter');	
// 		let matchedLetter = $('.show');	
//         if(matchedLetter.length === phraseLetter.length) {
//             return true;
//         } else {
//             return false;
//         }
// 	}	

    

//     removeLife() {
//         this.missed += 1;
//         if ( this.missed == 1 ) {
//           $('.tries:eq(4) img').attr('src','images/lostHeart.png');
//         }
//         if ( this.missed == 2 ) {
//           $('.tries:eq(3) img').attr('src','images/lostHeart.png');
//         }
//         if ( this.missed == 3 ) {
//           $('.tries:eq(2) img').attr('src','images/lostHeart.png');
//         }
//         if ( this.missed == 4 ) {
//           $('.tries:eq(1) img').attr('src','images/lostHeart.png');
//         }
//         else if( this.missed == 5 ) {
//           $('.tries:eq(0) img').attr('src','images/lostHeart.png');
//           this.gameOver();
//         }
//       }
// //     removeLife()
// // {
        
// //         this.missed += 1;
// // 		let liveHrt = document.querySelector('.tries');
// // 		let liveHrtImg = liveHrt.firstChild;
// // 		liveHrt.classList.remove('tries');
// // 		liveHrtImg.src = "images/lostHeart.png";	
// // 		if(this.missed === 5) {
// // 			this.gameOver(false);
		
// //         }


// //     }


//     gameOver(gameWon) 
//         {
        
//             $("#overlay").fadeIn("slow");
//         if (gameWon==="lost") {

//             $("#overlay h1").text('You Lose');
//             $("#overlay").addClass('lose').removeClass('start');

//         }else if (gameWon==='won'){
//             $("#overlay h1").text('You Win')
//             $("#overlay").addClass('win').removeClass('start');
//         }

//         gameReset(){
//             $('#phrase ul li').remove();
//             $keyButton.each( (index, key) => {
//               $(key).prop('disabled', false);
//               $(key).removeClass('chosen');
//               $(key).removeClass('wrong');
//               $(key).addClass('key');
//             });
//             $('.tries img').each( (index, img) => {
//               $(img).attr('src','images/liveHeart.png');
//             });
//             $menu.removeClass('win').removeClass('lose');
//           }
//          }
          
        


    





// 