/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Phrase.js to create a Phrase class to handle the creation of phrases.


 class Phrase{
    constructor(phrase){
      
      this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){
      const ul = document.querySelector('#phrase ul');
		ul.innerHTML = '';	// list contents
		const piece = this.phrase.split("");	// by using an empty string ("") as the separator, the phrase is split between each character (including spaces), and the characters stored as an array in the "piece" variable.
		piece.forEach( letter => {	
            let li = document.createElement('li');
			let liText = document.createTextNode(letter);
			li.appendChild(liText);
			if (letter === ' ' ) {   
               li.classList.add('space');
            } else {
				li.classList.add('hide', 'letter',`${letter}`);
			}
			// each character in the phrase is stored as a separate list element.
			ul.appendChild(li);
		});
    }

      }
 
    




 