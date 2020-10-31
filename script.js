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
    var pwd = "bruh";
    alert("When asked a question click 'confirm' for yes and 'cancel' for no, ok?");

  var passwordLength = prompt("Please enter the length of password between 8 and 128"); 
    
    passwordLength = checkNan(passwordLength); 
    passwordLength = checkNum(passwordLength);
    var pass="";
    var str ="";

  var containLowercase = confirm("Do you want to include lowercase letters?");
  if (containLowercase) {
      str= str.concat('abcdefghijklmnopqrstuvwxyz');
      alert (str);
  }
  var containUppercase = confirm("Do you want to include uppercase letters?");
  if (containUppercase) {
      str = str.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      alert(str);
  }
  var containNumeral = confirm("Do you want to include numbers?");
    if (containNumeral) {
        str = str.concat('0123456789');
        alert(str);
    }
  var containSymbols = confirm("Do you want to include special characters?");
    if (containSymbols) {
        str = str.concat(' !"#$%&\'()*+_./:;<+>?@[]^_`{|}`');
        alert(str);
    }

    return str;
}
function checkNan(var1) {
    var tempLength = var1;
     tempLength = parseInt(tempLength);
    while (isNaN(tempLength) ) {
        tempLength = prompt("Listen! Please enter a NUMBER between 8 and 128");
        tempLength = parseInt(tempLength);
    }
    return tempLength;
}
function checkNum(var2) {
    var tempLength = var2;
    tempLength = parseInt(tempLength);
    while (tempLength < 8 || tempLength > 128) {
        tempLength = prompt("Whoa there buddy, please enter a number BETWEEN 8 and 128");
        tempLength= checkNan(tempLength);
        tempLength = parseInt(tempLength);
    }
    return tempLength;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
