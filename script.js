var smallChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "t", "u", "v", "w", "x", "y", "z"];
var bigChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var userChoice = []


//do I need this?
var generateBtn = document.querySelector("#generate");

var confirmPassword = confirm("Would you like to create a password?");

//if user would like to create pw (confirmPw === true, run:)
if (confirmPassword) {
    alert("Click OK to create password");
}

//function to create password
function createPassword





//ask user how long they want their pw to be
var pwLength = prompt("How many characters would you like your password to be?");
//if user decides pw to be less than min. 8 characters alert
if (pwLength <= 8) {
    alert("Password not long enough. Please try again.")
}
//else if user elects to have 8+ characters alert
else if (pwLength => 8) {
    alert
}
