/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Phrase.js to create a Phrase class to handle the creation of phrases.


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
	  /*
	  * Checks if passed letter is in phrase
	  * @param (string) letter - Letter to check
	  */
	  checkLetter(letter) {
		if ( this.phrase.includes(letter) ) {
		  return true;
		}
		else {
		  return false;
		}
	  }
	  /*
	  * Displays passed letter on screen after a match is found
	  * @param (string) letter - Letter to display
	  */
	  showMatchedLetter(letter) {
		let matchedLetterLIs = $(`.${letter}`);
		matchedLetterLIs.removeClass('hide').addClass('show');
	
	  }
	 }
    //addPhraseToDisplay(){
//       const ul = document.querySelector('#phrase ul');
// 		ul.innerHTML = '';	// list contents
// 		const piece = this.phrase.split("");	// by using an empty string ("") as the separator, the phrase is split between each character (including spaces), and the characters stored as an array in the "piece" variable.
// 		piece.forEach( letter => {	
//             let li = document.createElement('li');
// 			let liText = document.createTextNode(letter);
// 			li.appendChild(liText);
// 			if (letter === ' ' ) {   
//                li.classList.add('space');
//             } else {
// 				li.classList.add('hide', 'letter',`${letter}`);
// 			}
// 			// each character in the phrase is stored as a separate list element.
// 			ul.appendChild(li);
// 		});
//     }

	  
// 	checkLetter(){

// 		if(this.phrase.includes(letter)){
//             return true;
//         } else {
//             return false;
//         }
	

// 	};





// 	showMatchedLetter(){

// const letterBox = document.querySelectorAll(`.${letter}`);	
// 		if(this.letterBox(letter)) {
// 			for (let i = 0; i < this.letterBox.length; i++) {
// 				letterBox[i].classList.add('show');	
// 				letterBox[i].classList.remove('hide');	


// 	};










// }
 
    




// 	}}