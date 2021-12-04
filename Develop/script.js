// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var charSpecial = [',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '!', '#', '$', '%', '&', '*']
var charNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function generatePassword() {
  console.log("this button works");

//Prompt for password LENGTH (8-128)


//Prompt user for uppercase, lowercase, numeric, special characters


//Validate the user's input (make sure length is between 8-128 and that at least one character type is selected)


//Generate the password


//Display the generate password to the page
  return "password goes here";
}

// Write password to the #password input // function that is called by click of generate button // function from "generatePassword"
//will be stored in Password variable // no generatePassword function is made !!
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //password will be displayed on password text on screen
  passwordText.value = password;

}

// Add event listener to generate button // when generate button is clicked, writePassword function will be called
generateBtn.addEventListener("click", writePassword);
