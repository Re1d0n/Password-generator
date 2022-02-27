// Assignment code here

// objective: make computer generate password.

let lowercase ="qwertyuiopasdfghjklzxcvbnm"
let numbers =1234567890

let emptyString = ""

let number = 8

const generatePassword = () => {
  passwordString = '';

for (var i = 0; i < number; i++) {
let string = Math.floor(Math.random() * lowercase.length);
passwordString += lowercase.substring (string, string + 1);
}

console.log(passwordString);

}

generatePassword();


















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
