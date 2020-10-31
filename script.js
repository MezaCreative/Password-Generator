// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generates password by prompting for requirements
function generatePassword() {
    alert("When asked a question click 'confirm' for yes and 'cancel' for no, ok?")

  var passwordLength = prompt("Please enter the length of password between 8 and 128"); 

  var containLowercase = confirm("Do you want to include lowercase letters?");
  var containUppercase = confirm("Do you want to include uppercase letters?");
  var containNumeral = confirm("Do you want to include numbers?");
  var containSymbols = confirm("Do you want to include special characters?");


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
