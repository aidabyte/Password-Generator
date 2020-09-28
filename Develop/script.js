// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



// variables for the user to choose from
  numbers = "0123456789",
  lowerCase = "abcdefghijklmnopqrstuvwxyz"
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  specialChar = "!#$%@&^*()"
  passLength = ""
}


//prompts for code
function generatePassword(){

  var passLength = prompt("choose a number between 8 and 128");
  if (passLength< 8 || passLength> 128) {
    alert("You're password isnt between 8 of 128 characters, please try again");
    return;
  }
var lowerCase = confirm ("Do you want lowercase letters?");
var upperCase = confirm ("Do you want lowercase letters?");
var numbers = confirm ("Do you want numbers?");
var specialChar = confirm ("Do you want special characters?");







  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
