// Selects random characters for the password
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  promptUser();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Define all the available characters

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = ["abcdefghijklmnopqrstuvwxyz"]
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var specialChar = "!#$%&'()*+,-./:;<=>?@][/^_`{|}~";
var lowercaseArray = ["abcdefghijklmnopqrstuvwxyz"]
var numericcaseChar = "0123456789";
var lowercaseArray = ["abcdefghijklmnopqrstuvwxyz"]
var approvedChar = ''

// create a variable to hold all available possibilities
var choiceArray = "";

 // generates the paramaters to display the password
function generatePassword(x, needsLower, needSpecial, needsNumber, length) {

  currentLength = 0
  pw = '';

 
  if(x){
    pw += getRandomUpperChar();
    approvedChar += uppercaseChar

  }
  if(needsLower){
    pw += getRandomLowerChar();
    approvedChar += lowercaseChar
    
  }
  if(needSpecial){
    pw += getRandomSpecialChar();
    approvedChar += specialChar
    
  }
 
  if(needsNumber){
    pw += getRandomnumericcaseChar();
    approvedChar += numericcaseChar
    
  }
  var i;

  console.log(length - pw.length)

  var numberToAdd = length - pw.length
  for (i = 0; i < numberToAdd; i++) {
    console.log(approvedChar);
    console.log(i)
   pw += approvedChar.charAt(getRandomInt(approvedChar.length))
    console.log(pw.length)
    
  } 
  return pw
}

function getRandomLowerChar() {

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
  if(passLength >= 8 && passLength < 129) {
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

    //Displays password in the text box and console
    var pw=generatePassword (needsUpper, needsLower, needSpecial, needsNumber, passLength);
    console.log(pw);
    
    var passwordText = document.querySelector("#password");
    passwordText.value = pw;

  }