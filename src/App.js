import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)
      console.log(vowelsArray[0])
      console.log(currentWord.indexOf(vowelsArray[0]))

      var firstVowelIndex = currentWord.indexOf(vowelsArray[0])
      if (firstVowelIndex === 0){
        // return currentWord + "way"
        console.log(currentWord + "way")
      }else if(currentWord[0] === "y"){
          // return (currentWord.slice(1) + "y" + "ay")
          console.log(currentWord.slice(1) + "y" + "ay")
          // this is for the word yummy. i checked if the firt letter of a word is "y", and if it is, it will take everything after the first y, and add a y to the end plus an "ay"
        }else if(currentWord[0] === "q"){
          // return (currentWord.slice(2) + "qu" + "ay")
          console.log(currentWord.slice(2) + "qu" + "ay")
           // for queen, i checked if the first letter in the word was a "q" and if it does i know that "u" follows "q" so i removed both of them, moved it to the end, and tagged on "ay"
      } else if (firstVowelIndex !== 0) {
          // return (currentWord.slice(firstVowelIndex) + currentWord.slice(0, firstVowelIndex) + "ay") 
          console.log((currentWord.slice(firstVowelIndex) + currentWord.slice(0, firstVowelIndex) + "ay") )
          // i did slice(first vowel index to pull everything before the first vowel, then used slice again to paste it back in after the new word, finally added ay to the end)
        
      }
    })

//




    // function translatePigLatin(userInput) {

    //   // returns true only if the first letter in str is a vowel
    //   function isVowelFirstLetter() {
    //     var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    //     for (i = 0; i < vowels.length; i++) {
    //       if (vowels[i] === userInput[0]) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }

    //   // if str begins with vowel case
    //   if (isVowelFirstLetter()) {
    //     userInput += 'way';
    //   }
    //   else {
    //     // consonants to move to the end of string
    //     var consonants = '';

    //     while (isVowelFirstLetter() === false) {
    //       consonants += userInput.slice(0,1);
    //       // remove consonant from str beginning
    //       userInput = userInput.slice(1);
    //     }

    //     userInput += consonants + 'ay';
    //   }

    //   return userInput;
    // }


//---------------------------------------













      //--------------------------------------------
    // function pigLatin (phrase){

    //   const vowels = ["a", "e", "i", "o", "u"]
    //   let vowelIndex = 0
    //   if(vowels.includes(phrase[0])) {
    //     return phrase + "way"
    //   } else {
    //     for (let char of phrase) {
    //       if (vowels.includes(char)){
    //         vowelIndex = phrase.indexOf(char)
    //         break;
    //       }
    //     }
    //     return phrase.slice(vowelIndex) + phrase.slice(0, vowelIndex) + "ay"
    //   }
    // }
//-----------------------------------------------------

      // your code here!
      // split already logged
      // vowels already found using filter
      // using loop on vowelsArray return index of the vowel: vowelIndex
      // return index snippet of the string: find the index of all characters prior to the index of first vowel
        // all indexes must be < length of the firstvowel index
        //charAt
      // window filter['w', 'i', 'n', 'd', 'o', 'w']
      // return characters [w]
      // .push
      // concat the values in each index
      // join the first indexes





      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word



    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }


  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by ~your name here~</footer>
      </>
    )
  }
}

export default App
