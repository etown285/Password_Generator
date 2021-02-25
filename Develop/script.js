// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptUser();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Define all the available characters

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characterselection = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numericcaseChar = "0123456789";

// create a variable to hold all available possibilities
var choiceArray = [];

function generatePassword() {

  return ''
}

function getRandomLowerChar() {
  /*
  for (var i = 0; i < lowercaseChar.length; i++) {
    alert(lowercaseChar.charAt(i));
  } */
  return lowercaseChar.charAt(getRandomInt(lowercaseChar.length));
}

function getRandomUpperChar() {

  return uppercaseChar.charAt(getRandomInt(uppercaseChar.length));
}

function getRandomCharacterSelection() {

  return characterselection.charAt(getRandomInt(characterselection.length));
}


function getRandomnumericcaseChar() {

  return numericcaseChar.charAt(getRandomInt(numericcaseChar.length));
}


function promptUser() {
  // Prompt User to choose if they want to use UPPER case letters
  var passLength = prompt("How long would you like your password?");
  // Validate the length
  if(passLength >= 8 && passLength < 128) {
    // if both expressions evaluate to true
    console.log("Valid Length");
    }
  else {
    return alert("Password Length must be between 8 and 128 characters");
    }
    var lowercaseChar = confirm("Do you need lower case characters?");
    //Select lowercase characters 
    if(lowercaseChar === true) {
      
    }
    var uppercaseChar = confirm("Do you need upper case characters?");
    //Select uppercase characters 
    if(uppercaseChar === true) {
      
    }
    var numericcaseChar = confirm("Do you need numeric case characters?");
    //Select numeric characters
    if(numericcaseChar === true) {

    } 
    var characterselection = confirm("Do you need special characters?");
    //Select numeric characters
    if(characterselection === true) {
      
    } 
}