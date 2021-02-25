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
var characterselection = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// create a variable to hold all available possibilities
var choiceArray = [];

function generatePassword() {

  return ''
}


function promptUser() {
  // Prompt User to choose if they want to use UPPER case letters
  var passLength = prompt("How long would you like your password?");
  // Validate the lenght
  if(passLength >= 8 && passLength < 128) {
    // if both expressions evaluate to true
    console.log("Valid Length");
    
    var lowercaseChar = confirm("Do you need lower case characters");
    //Select lower case characters 
    if(lowercaseChar === true) {
      
    }
  } else {
    return alert("Password Length must be between 8 and 128 characters");
  }


  console.log(passLength);
}