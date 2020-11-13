var smallChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"];
var bigChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var pwOptions = "";

var generateBtn = document.querySelector("#generate");

// create function to generate password

function generatePassword() {
}
var passwordLength = parseInt(prompt("How many characters would you like your password to contain? The password must be 8 to 128 characters."));
  while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || (passwordLength === NaN || passwordLength === null)){
    alert("Your password is too short. Please try again.");
    passwordLength=parseInt(prompt("How many characters would you like your password to contain? The password must be 8 to 128 characters."));
  }


var charChosen = confirm("Would you like to use lowercase letters?")
if (smallChar === true) {
  pwOptions = smallChar.concat(pwOptions)
}

var charChosen = confirm("Would you like to use uppercase letters?")
if (bigChar === true) {
  pwOptions = bigChar.concat(pwOptions)
}

var charChosen = confirm("Would you like to use numbers?")
if (numbers === true) {
  pwOptions = numbers.concat(pwOptions)
}

var charChosen = confirm("Would you like to use special characters?")
if (specialChar === true) {
  pwOptions = specialChar.concat(pwOptions)
}
  



 //Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


