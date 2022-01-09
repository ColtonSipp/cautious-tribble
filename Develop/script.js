// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ------------------------------------------------------------------------

// Arrays
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersList = ["1","2","3","4","5","6","7","8","9","0"];
var specialList = ["!","@","#","$","%","^","&","*","(",")","?"];

// choices
var choices;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
var passwordLength = prompt("How many characters would you like your password to have? Choose between 8 and 20.")
if (passwordLength < 8 || passwordLength > 20){
  alert("error: refresh page.")
} else {
  var confirmLowercase = confirm("Will your password contain lowercase letters?");
  var confirmUppercase = confirm("Will your password contain uppercase letters?");
  var confirmNumber = confirm("will your password contain numbers?");
  var confirmSpecial = confirm("will your password contain special characters? (ex:!@#$%)");
}


//Confirms
// Cancel was selected on all 4 confirms
if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial){
  alert("error: No criteria selected. Refresh the page.")
}
// Okay was selected on all 4 confirms
else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {
  choices = character.concat(lowercaseList,uppercaseList,numbersList,specialList);
}
// Okay was selected on 3/4 confirms
else if (confirmUppercase && confirmNumber && confirmSpecial) {
  choices = character.concat(uppercaseList,lowercaseList,specialList);
}
else if (confirmLowercase && confirmNumber && confirmSpecial) {
  choices = character.concat(lowercaseList,numbersList,specialList);
}
else if (confirmLowercase && uppercaseList && specialList) {
  choices = character.concat(lowercaseList,uppercaseList,specialList);
}
else if (confirmLowercase && confirmUppercase && confirmNumber){
  choices = character.concat(lowercaseList,uppercaseList,numbersList);
}
// Okay was selected on 2/4 confirms
else if (confirmNumber && confirmSpecial){
  choices = character.concat(numbersList,specialList);
}
else if (confirmLowercase && confirmSpecial) {
  choices = character.concat(lowercaseList,specialList);
}
else if (confirmSpecial && confirmUppercase){
  choices = character.concat(specialList,uppercaseList);
}
else if (confirmLowercase && confirmNumber){
  choices = character.concat(lowercaseList,numbersList);
}
else if (confirmLowercase && confirmUppercase){
  choices = character.concat(lowercaseList,uppercaseList);
}
else if (confirmNumber && confirmUppercase){
  choices = character.concat(numbersList,uppercaseList);
}
//Okay was selected on 1/4 confirms
else if (confirmLowercase){
  choices = lowercaseList;
}
else if (confirmUppercase){
  choices = uppercaseList;
}
else if (confirmNumber){
  choices = numbersList;
}
else if (confirmSpecial){
  choices = specialList;
}


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


