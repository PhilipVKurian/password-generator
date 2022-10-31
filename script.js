// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordField = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordField.readOnly = false;
  passwordText.value = password;
}
function generatePassword() {
  var length = window.prompt("How long do you want your password to be? (between 8-128 characters)");  
  var generatedPassword = "";
  var placeholderPassword = "";
  var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = capitals.toLocaleLowerCase();
  var numbers = "0123456789";
  var specialCharacters = "~`!@#$%^&*()_-+={[}]|;'<,>.?/";
  console.log(specialCharacters);
  if (isNumeric(length) == true) {
    var specialCharsSelect = window.confirm("Would you like the password to contain special characters?");
    var capitalCharsSelect = window.confirm("Would you like the password to contain capitals?");
    var lowerCharsSelect = window.confirm("Would you like the password to contain lowerCase?");
    var numericCharsSelect =  window.confirm("Would you like the password to contain numbers?");

    //Validation to check if at least one type is chosen
    if (specialCharsSelect || capitalCharsSelect || lowerCharsSelect || numericCharsSelect){
      console.log("at least one was chosen");
      if (specialCharsSelect){
        placeholderPassword = placeholderPassword.concat(specialCharacters);
      }
      if(capitalCharsSelect){
        placeholderPassword = placeholderPassword.concat(capitals);
      }
      if(lowerCharsSelect){
        placeholderPassword = placeholderPassword.concat(lowerCase);
      }
      if(numericCharsSelect){
        placeholderPassword = placeholderPassword.concat(numbers);
      }
      for(var i = 0; i < length; i++){
        generatedPassword += placeholderPassword.charAt(Math.floor(Math.random()*(placeholderPassword.length)));        
      }
      return generatedPassword;

    }else { 
        window.alert("At least one type must be selected");
        return;
    }
  } 
}

function isNumeric(n){
  for(let i = n.length - 1; i >= 0; i--){
    const d = n.charCodeAt(i);
    if (d < 48 || d > 57){
      window.alert("That is a letter");  
      return false;    
    }
  }
  var number = parseInt(n);
  if(number < 8 || number > 128) {
    window.alert("That number is not between 8 -> 128 digits..");
    return false;
  }
  return true;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//textObject.readOnly = true|fal
