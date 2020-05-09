// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 0
var passCriteria = [];

//password criteria 
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "1234567890"
var speChar = "!#$%&*+-.<=>?@^_~" 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//prompts for password criteria when user clicks generate password
function generatePassword() {

    //gets password length from user prompt
    passLength();

    //asks user for criteria 
    var confirmUpper = confirm("Would you like to include uppercase letters?");
    var confirmLower = confirm("Would you like to include lowercase letters?");
    var confirmNum = confirm("would you like to include numbers?");
    var confirmSpeChar = confirm("Would you like to include special characters?");
    
    //if user confirms criteria..
    
    if (confirmUpper) {
        var newUpper = upper.split("")
        passCriteria.push(newUpper);
    }
    if (confirmLower) {
        var newLower = lower.split("")
        passCriteria.push(newLower);
    }
    if (confirmNum) {
        var newNum = num.split("")
        passCriteria.push(newNum);
    }
    if (confirmSpeChar) {
        var newSpeChar = speChar.split("")
        passCriteria.push(newSpeChar);
    }
    //return passCriteria;

    //getPass();
    
}

//this function determines the length of password by user prompt
function passLength() {
    p = prompt("Please enter length of password: \n**Must be at least 8 characters and no more than 128 characters");
    if (p >= 8 && p < 129) {
        length = p
        return length;
    } else {
        alert("Password must be at least 8 characters and no more than 128 characters.");
        passLength();
    }
}

function getPass (){
    
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//when a user clicks generate password
//a function will spit out a number of prompts for criteria 
//first prompt asks for length of password
//second confirm asks for uppercase
//third confirm asks for lowercase
//fourth confrim asks for numeric 
//fifth confirm asks for special characters

//for each confirm that is true, the characters will be randomized using math.random()
//the value of each character must be at least one and the total of all must be equal to the length

//generatePassword will then be written in the text box 