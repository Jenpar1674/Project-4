/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Phrase.js to create a Phrase class to handle the creation of phrases.

//creates Phrase class and sets phrases to lower case

class Phrase {
	constructor(phrase) {
	  this.phrase = phrase.toLowerCase();
	}
  
	
	// Display phrase on game board
	 
	addPhraseToDisplay() {
	  const phraseContainer = document.getElementById('phrase');
	  const characters = this.phrase.split("");
  
	  characters.forEach(function (char) {
		let character = document.createElement('li');
  
		if (char.match(/^[A-Za-z]+$/)) {
		  character.classList.add('hide', 'letter', char);
		  character.innerHTML = char;
		} else {
		  character.setAttribute('class', 'space');
		  character.innerHTML = char;
		}
  
		phraseContainer.firstElementChild.appendChild(character);
	  })
	}
  
	
	 //Checks if passed letter is in phrase
	
	checkLetter(letter) {
	  const phrase = this.phrase;
	  for (let i = 0; i < phrase.length; i++) {
		if (letter === phrase[i]) {
		  return true;
		};
	  }
	}
  
	
	//Displays passed letter on screen after a match is found
	
	showMatchedLetter(letter) {
  
	  let matches = document.querySelectorAll(`.${letter}`);
	  matches.forEach((char) => {
		char.classList.remove('hide');
		char.classList.add('show');
	  });
	  game.checkForWin();
	}
  }

