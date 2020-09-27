// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//variables for the user to choose from
function generatePassword(){
  var numbers = ["1,2,3,4,5,6,7,8,9"];
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var randomCharacters = "#@!$%^&*()_-=+;:.?[]{}";
  var passwordLength = "";
  
//prompts for code
var passLength = prompt ("choose a number between 8 and 128 ")
  if (passLength>=8) {
    alert ("You're password isnt between 8 of 128 characters")
    return;
  }
 
var lowerCase = confirm ("Do you want lowercase letters?")


var upperCase = confirm ("Do you want lowercase letters?")
var numbers = confirm ("Do you want numbers?")
var specialChar = confirm ("Do you want special characters?")





  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
