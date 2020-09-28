// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);
// variables for the user to choose from
  var numbers = ["1,2,3,4,5,6,7,8,9"];
  var lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialChar = ["!@#$%&"];

  var cLength = "";
  var cSpecialChar;
  var cNumber;
  var cUpperCase;
  var cLowerCase;



//prompts for the user
function generatePassword() {
//asking the proper length of the numbers
  var cLength = prompt("choose a number between 8 and 128");
  if (cLength< 8 || cLength> 128) {
    alert("You're password isnt between 8 of 128 characters, please try again");
    return;
  }

  //confirm all the different questions that the user will be asked
var cLowerCase = confirm("Do you want lowercase letters?");
var cUpperCase = confirm("Do you want lowercase letters?");
var cNumber = confirm("Do you want numbers?");
var cSpecialChar = confirm("Do you want special characters?");

    if (cSpecialChar === false && cNumber === false && cUpperCase === false && cLowerCase === false) {
      alert("You must choose one of these characters?");
      var cLowerCase = confirm("Do you want lowercase letter?");
      var cUpperCase = confirm("Do you want lowercase letters?");
      var cNumber = confirm("Do you want numbers?");
      var cSpecialChar = confirm("Do you want special characters?");

    }

    //Actions to be performed
      var passwordChar = []
      if (cLowerCase) {
        passwordChar = passwordChar.push(cLowerCase)
      }
      if (cUpperCase) {
        passwordChar = passwordChar.push(cUpperCase)
      }
      if (cNumber){
        passwordChar = passwordChar.push(cNumber)
      }
      if (cSpecialChar) {
        passwordChar = passwordChar.push(cSpecialChar)
      }
      

      }  


      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
      }


