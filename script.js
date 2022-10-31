// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordField = document.querySelector("#password");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordField.readOnly = false;
  passwordText.value = password;
}
//Generate Passwoed method takes user input and returns a password with the criteria the user declared.
function generatePassword() {
  var length = window.prompt("How long do you want your password to be? (between 8-128 characters)");  
  var generatedPassword = "";
  var placeholderPassword = "";
  var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = capitals.toLocaleLowerCase();
  var numbers = "0123456789";
  var specialCharacters = "~`!@#$%^&*()_-+={[}]|;'<,>.?/";

  if (length != null && isNumeric(length)) {
    var specialCharsSelect = window.confirm("Would you like the password to contain special characters?");
    var capitalCharsSelect = window.confirm("Would you like the password to contain capitals?");
    var lowerCharsSelect = window.confirm("Would you like the password to contain lowerCase?");
    var numericCharsSelect =  window.confirm("Would you like the password to contain numbers?");

    if (specialCharsSelect || capitalCharsSelect || lowerCharsSelect || numericCharsSelect){
      if (specialCharsSelect){
        placeholderPassword += specialCharacters;
      }
      if(capitalCharsSelect){
        placeholderPassword += capitals;
      }
      if(lowerCharsSelect){
        placeholderPassword += lowerCase;
      }
      if(numericCharsSelect){
        placeholderPassword += numbers;
      }
      for(var i = 0; i < length; i++){
        generatedPassword += placeholderPassword.charAt(Math.floor(Math.random()*(placeholderPassword.length)));        
      }
      return generatedPassword;
    } else { 
      window.alert("At least one type must be selected");
      return;
    }
  }
}
//Validation method to check if input is a number or a letter
function isNumeric(n){
  for(let i = n.length - 1; i >= 0; i--){
    var d = n.charCodeAt(i);
    if (d < 48 || d > 57){
      window.alert("Please type a number");  
      return false;    
    }
  }
  if(n< 8 || n > 128) {
    window.alert("That number is not between 8 -> 128 digits..");
    return false;
  }
  return true;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);