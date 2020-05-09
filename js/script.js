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
var lower = "abcdefghijklmnopqrstuvwxyz"

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var num = "1234567890"

var speChar = ["!","#", "$", "%", "&", "*", "+", "-", 
            ".", "<", "=", ">", "?", "@", "^", "_", "~"]
var NewSpeChar = speChar.join()

//prompts for password criteria when user clicks generate password
function generatePassword() {
    passLength();
    var confirmUpper = confirm("Would you like to include uppercase letters?");
    var confirmLower = confirm("Would you like to include lowercase letters?");
    var confirmNum = confirm("would you like to include numbers?");
    var confirmSpeChar = confirm("Would you like to include special characters?");
    //if user wants to include uppercase
    if (confirmUpper) {
        appendCriteria(upper);
    }
    if (confirmLower) {
        appendCriteria(lower);
    }
    if (confirmNum) {
        appendCriteria(num);
    }
    if (confirmSpeChar) {
        appendCriteria(NewSpeChar);
    }
}

//this function determines the length of password by user prompt
var length = 0

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

//this function adds criteria to the generator if confirmed by user

function appendCriteria(criteria) {
    var charset = ""
    charset = charset + criteria;
    return charset;
}







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