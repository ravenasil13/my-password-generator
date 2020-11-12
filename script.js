var smallChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"];
var bigChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var pwArray = "";



var passwordLength = prompt("How many characters would you like your password to contain?");
// if password doesn't fit critera 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password is too short. Please try again.");
    // loop to present user options 

  }

var charChosen = confirm("Would you like to use lowercase letters?")
if (smallChar === true) {
  password = []
}

var charChosen = confirm("Would you like to use uppercase letters?")
if (bigChar === true) {
  password =[]
}

var charChosen = confirm("Would you like to use numbers?")
if (numbers === true) {
  password = []
}

var charChosen = confirm("Would you like to use symbols?")
if (symbols === true) {
  password = []
}




