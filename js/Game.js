/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 

class Game{

    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase ("Your smile is an umbrella"),
            new Phrase ("Dont burn your bridges"),
            new Phrase ("Blondes have more fun"),
            new Phrase ("Home is where the heart is"),
            new Phrase ("Dont count your chickens before they hatch")
         ];
         this.activePhrase = null;
        

 }
    
    getRandomPhrase() {
        let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
        return this.phrases[number];
    }
    

     startGame() {

         const newLocal = this.getRandomPhrase();
       $('#overlay').hide();
        newLocal=this.activePhrase;
        phrase= new Phrase(this.activePhrase)
        phrase.addPhraseToDisplay();



} ;   
            
    
    
    





}
 