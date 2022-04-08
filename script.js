// Assignment code here

// objective: make computer generate password.

let lowercase ="qwertyuiopasdfghjklzxcvbnm"
let numbers ="1234567890"
let specialCharecters ="!@#$%^&*()_+"
let Uppercase ="QWERTYUIOPASDFGHJKLZXCVBNM"
let generatemypassword = document.getElementById("password")

let emptyString = ""




function getNumber(){
  let passwordAmount = 0;
  while(passwordAmount >128 || passwordAmount < 8){
    passwordAmount = prompt("Enter a number between 8 and 128 charecters.");
  }
generatePassword (passwordAmount);
}


const generatePassword = (passwordAmount) => {
  passwordString = '';

for (var i = 0; i < passwordAmount; i++) {
let string = Math.floor(Math.random() * emptyString.length);
passwordString += emptyString.substring (string, string + 1);
}

console.log(generatemypassword)
generatemypassword.value = passwordString;
console.log(passwordString);
console.log(generatemypassword)
}



















// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
emptyString=""
  let addLetters = window.confirm("Do you want lowercase?")

  if(addLetters===true){
  emptyString = emptyString + lowercase
  }


let addNumbers = window.confirm("Do you want numbers?")

if(addNumbers===true){
  emptyString = emptyString + numbers
}

let addSpecialCharecters = window.confirm("Do you want special charecters?")

if(addSpecialCharecters===true){
  emptyString = emptyString + specialCharecters
}

let addUppercase = window.confirm("Do you want uppercase letters?")

if(addUppercase===true){
  emptyString = emptyString + Uppercase
}
console.log(emptyString)

getNumber();


// passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
