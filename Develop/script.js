function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
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
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numericcaseChar = "0123456789";

// create a variable to hold all available possibilities
var choiceArray = "";

function generatePassword(x, needsLower, needSpecial, needsNumber, length) {

  currentLength = 0
  pw = ""

  // generate password
  if(x){
    pw += getRandomUpperChar();

  }
  if(needsLower){
    pw += getRandomLowerChar();
    
  }
  if(needSpecial){
    pw += getRandomSpecialChar();
    
  }
 
  if(needsNumber){
    pw += getRandomnumericcaseChar();
    
  }
  var i;
  for (i = 0; i < length - pw.length; i++) {
    if(x){
      pw += getRandomUpperChar();
  
    }
    if (pw.length==length) {
      break;
    }
    if(needsLower){
      pw += getRandomLowerChar();
      
    }
    if (pw.length==length) {
      break;
    }
    if(needSpecial){
      pw += getRandomSpecialChar();
      
    }
    if (pw.length==length) {
      break;
    }
    if(needsNumber){
      pw += getRandomnumericcaseChar();
      
    }
    
  } 
  return pw;
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

function getRandomSpecialChar() {

  return specialChar.charAt(getRandomInt(specialChar.length));
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

    var needsLower=false;
    var needsNumber=false;
    var needsUpper=false;
    var needSpecial=false;
    
    var lowerCaseChoice = confirm("Do you need lower case characters?");
    //Select lowercase characters 
    if(lowerCaseChoice === true) {
      
      needsLower=true;
      
    }
    var upperCaseChoice = confirm("Do you need upper case characters?");
    //Select uppercase characters 
    if(upperCaseChoice === true) {
      
      needsUpper=true;
    }
    
    var numericCaseChoice = confirm("Do you need numeric case characters?");
    //Select numeric characters
    if(numericCaseChoice === true) {
     
      needsNumber=true;
    } 

    var specialCharacterChoice = confirm("Do you need special characters?");
    //Select special characters
    if(specialCharacterChoice === true) {
      
      needSpecial=true;
    } 
    var p=generatePassword (needsUpper, needsLower, needSpecial, needsNumber, passLength);
    console.log(p);
  }