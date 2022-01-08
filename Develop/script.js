// WHEN I click the button to generate a password
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// THEN I am presented with a series of prompts for password criteria
function generatePassword() {

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = prompt("Password must be at least 8 characters and no more than 128 characters");

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var passwordLowercase = prompt("password must contain at least lowercase character ")
var passwordUppercase = prompt("password must contain at least one Uppercase character")
var passwordNumeric = prompt("password mustt contain at least one number")
var passwordSpecial = prompt("password must contain at least one special character such as: !@#$%^&*()_+-=")

// WHEN I answer each prompt


// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered


// THEN a password is generated that matches the selected criteria


// WHEN the password is generated

}
// THEN the password is either displayed in an alert or written to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}































