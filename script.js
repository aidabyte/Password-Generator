// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// variables for the user to choose from
var number = ["1,2,3,4,5,6,7,8,9"];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar = ["!@#$%&"];

//Declaration
var cLength = "";
var cSpecialChar;
var cNumber;
var cUpperCase;
var cLowerCase;



//prompts for the user
function generatePassword() {
//asking the proper length of the numbers
  var cLength = prompt("Choose a number between 8 and 128");
  if (cLength< 8 || cLength> 128) {
    alert("Your password is not between 8 of 128 characters, please try again");
    return;
  }

//confirm all the different questions that the user will be asked
    var cLowerCase = confirm("Do you want lowercase letters?");
    var cUpperCase = confirm("Do you want uppercase letters?");
    var cNumber = confirm("Do you want numbers?");
    var cSpecialChar = confirm("Do you want special characters?");
      if(cLowerCase === false && cUpperCase === false && cNumber === false && cSpecialChar === false) {
        alert("You must choose one of these characters?");
    var cLowerCase = confirm("Do you want lowercase letter?");
    var cUpperCase = confirm("Do you want uppercase letters?");
    var cNumber = confirm("Do you want numbers?");
    var cSpecialChar = confirm("Do you want special characters?");
}

// Actions to be performed
  var passwordChars = []
      if (cLowerCase) {
      passwordChars = passwordChars.concat(lowerCase)
      }
      if (cUpperCase) {
      passwordChars = passwordChars.concat(upperCase)
      }
      if (cNumber) {
      passwordChars = passwordChars.concat(number)
      }
      if (cSpecialChar) {
      passwordChars = passwordChars.concat(specialChar)
      }
      
// to be filled by the looping array
    var randomPassword = "";
    for (var i = 0; i < cLength; i++) {
        randomPassword = randomPassword + passwordChars[Math.floor(Math.random() * passwordChars.length)];    
    }  
    return randomPassword;
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

        passwordText.value = password;
}


