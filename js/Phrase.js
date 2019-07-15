/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Phrase.js to create a Phrase class to handle the creation of phrases.

//creates Phrase class and sets phrases to lower case

 class Phrase{
    constructor(phrase){
      
     this.phrase = phrase.toLowerCase();
	}
	

	addPhraseToDisplay() {
		const $phraseUL = $('#phrase ul');
		let charArr = this.phrase.split('');
		charArr.forEach(char => {
		  if( char === ' ' ) {
			$phraseUL.append(`<li class="space"> </li>`);
		  }
		  else {
			$phraseUL.append(`<li class="hide letter ${char}">${char}</li>`);
		  }
		});
	  }
	  
	  //Checks if passed letter is in phrase
	  
	  checkLetter(letter) {
		if ( this.phrase.includes(letter) ) {
		  return true;
		}
		else {
		  return false;
		}
	  }
	  
	  //Displays passed letter on screen after a match is found
	
	  showMatchedLetter(letter) {
		let matchedLetterLIs = $(`.${letter}`);
		matchedLetterLIs.removeClass('hide').addClass('show');
	
	  }
	 }
    