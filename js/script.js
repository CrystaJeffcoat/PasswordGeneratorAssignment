// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//password criteria 
function generatePassword() {
    //prompt for password length
    function passwordLength(passLength) {
        var passLength = prompt("How long would you like your password to be? \nLength must be at least 8 characters and no more than 128");
        if (prompt.value < 8 && prompt.value > 128) {
            alert("Password must be at least 8 characters long and no more than 128");
            passwordLength();
        }else {
            passLength = prompt.value
        }
    }

    //prompt for character types
    function charTypes() {

    }
}
generatePassword(passwordLength);