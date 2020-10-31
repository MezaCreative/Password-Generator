// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password by prompting for requirements
function generatePassword() {

    // Initializes variables for final password, password in progress, and string concatenation of required characters
    var pwd = "";
    var allChar ="";
    // Initializes booleans to check if password has what the user wanted
    var recUpper = false;
    var recLower = false;
    var recNum = false;
    var recSpecial = false;
    var finalCheck = false;

    // Provides instructions to user
    alert("When asked a question click 'OK' for yes and 'cancel' for no, ok?");

    // Asks the user for a password length
    var passwordLength = prompt("Please enter the length of password between 8 and 128"); 
    
    // Checks if password is not a number and or within required length
    passwordLength = checkNan(passwordLength); 
    passwordLength = checkNum(passwordLength);
  

    // Asks the user if they want lowercases
    var containLowercase = confirm("Do you want to include lowercase letters?");
        if (containLowercase) {
            allChar = allChar.concat('abcdefghijklmnopqrstuvwxyz');
            recLower = true;

         }

     // Asks the user if they want uppercases
    var containUppercase = confirm("Do you want to include uppercase letters?");
        if (containUppercase) {
            allChar = allChar.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
            recUpper = true;
        }

    // Asks the user if they want numbers
    var containNumeral = confirm("Do you want to include numbers?");
        if (containNumeral) {
            allChar = allChar.concat('0123456789');
            recNum = true;
        }

    // Asks the user if they want special char    
    var containSymbols = confirm("Do you want to include special characters?");
        if (containSymbols) {
            allChar = allChar.concat(' !"#$%&\'()*+_./:;<+>?@[]^_`{|}`');
            recSpecial = true;
         }
    
    
    // For loop that concatenates password
    for ( var i = 0; i < passwordLength; i++ ) { 

        // Generates random number between 0 and the length of the concatenated string of characters
        var randCharPos = rand(0, allChar.length);
        pwd = pwd.concat(allChar.charAt(randCharPos));
    }

    // Returns final password
    // validtator
    
    return pwd;
}

// Function that checks if user entered a number
function checkNan(var1) {
    var tempLength = var1;
    tempLength = parseInt(tempLength);

    // While loop checking if var is a number
    while (isNaN(tempLength) ) {
        tempLength = prompt("Listen! Please enter a NUMBER between 8 and 128");
        tempLength = parseInt(tempLength);
    }
    return tempLength;
}

// Function that checks if user entered a number within the desired range
function checkNum(var2) {

    // Temp variable that is copied from given parameter
    var tempLength = var2;
    tempLength = parseInt(tempLength);

    // While loop that checks for number to be in between 8 and 128
    while (tempLength < 8 || tempLength > 129) {
        tempLength = prompt("Whoa there buddy, please enter a number BETWEEN 8 and 128");
        tempLength= checkNan(tempLength);
        tempLength = parseInt(tempLength);
    }
    return tempLength;
}

// Function that returns a rounded down number between two numbers. 
 function rand(min, max) {
    var randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum)
}

// Checks for number
function checkNumber (foo) {
    var re = /d/;
    if ( re.test(foo)) {
        return true;
    }
    return false;
}

// Checks for uppercase
function checkUpper(foo) {
    var re = /[A-Z]/;
    if ( re.test(foo)) {
        return true;
    }
    return false;

}
// Check for lowercase
function checkLower(foo) {
    var re = /[a-z]/;
    if ( re.test(foo)) {
        return true;
    }
    return false;

}
//Checks for special
function checkSpecial(foo) {
    //var validation = false;
    var re = /\W|_/;
    if ( re.test(foo)) {
        return true;
    }
    return false;
   
   // return validation;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
