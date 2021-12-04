// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charLower = "abcdefghijklmnopqrstuvwxyz"
var charSpecial = "!@#$%^&*()<>.,?:;+="
var charNumber = "0123456789"

function generatePassword() {

  //Prompt for password LENGTH (8-128)
  let passwordLength = parseInt(window.prompt("How many characters (between 8-128) would you like your password to contain"));

  //Validate user's input (give user an alert that they need to choose valid character length (between 8-128, a number)
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a valid number between 8 and 128.")
    return generatePassword();
  }

  //Prompt user to choose if they want uppercase, lowercase, numeric, special characters in their passwords and how to select
  var chooseUpper = window.confirm("Would you like to include uppercase letters? Click OK for YES or CANCEL for NO.");
  var chooseLower = window.confirm("Would you like to include lowercase letters? Click OK for YES or CANCEL for NO.");
  var chooseSpecial = window.confirm("Would you like to include special characters? Click OK for YES or CANCEL for NO.");
  var chooseNumber = window.confirm("Would you like to include numbers? Click OK for YES or CANCEL for NO.");

  //Validate the user's input (give user alert that at least one character type has to be selected if they choose none, then return to start)
  if (!chooseUpper && !chooseLower && !chooseSpecial && !chooseNumber) {
    window.alert("Please choose at least one value to use the password generator.")
    return generatePassword();
  }

  //combine the user's choices into one variable based on whether they are true or not (var -> password options)
  var passwordOptions = "";
    chooseUpper ? passwordOptions += charUpper: ""; //IF chooseUpper is true, then charUpper string will be added to passwordOptions
    chooseLower ? passwordOptions += charLower: ""; //IF chooseLower is true, then charLower string will be added to passwordOptions
    chooseSpecial ? passwordOptions += charSpecial: ""; //IF chooseSpecial is true, then charSpecial string will be added to passwordOptions
    chooseNumber ? passwordOptions += charNumber: ""; //IF chooseNumber is true, then charNumber string will be added to passwordOptions
  
  //Generate the password
  var finalPassword = "";

  //commands the generator to choose a random character from the string of each variable that the user selected while also meeting the passwordLength criteria set by the user
  for (var i = 0; i < passwordLength; i++) {
    finalPassword += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
  }

  //log user selections and final password in the console to verify everything is working right
  console.log(passwordLength);
  console.log(passwordOptions);
  console.log(finalPassword);

  //Display the generated password to the page
  return finalPassword;
}

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
