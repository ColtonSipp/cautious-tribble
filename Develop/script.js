
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//------------------------------------------------------------------------

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Arrays
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ["!","@","#","$","%","^","&","*","(",")","?"];

// Function responsible for receiving information from prompts
function questions() {
  var isValid = false;
  do {
    var length = prompt("How many characters would you like your password to have? Choose between 8 and 20.");
    var askLowerCase = confirm("Will your password contain lowercase letters?");
    var askUpperCase = confirm("Will your password contain uppercase letters?");
    var askNumbers = confirm("will your password contain numbers?");
    var askSpecial = confirm("will your password contain special characters? (ex:!@#$%)");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
  } 
  if((length < 8)|| (length > 128))
    alert("Choose number between 8 and 128");
  else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
  else
    isValid = true;

  } while(!isValid);
  return responses;
}
// Function that takes the received information and generates a password
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }

  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  console.log(finalPassword);
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

console.log("This was very hard")