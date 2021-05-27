// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = prompt("how long do you want your password to be")
  var asklowercase = confirm("do you want to use lowercase letters")
  var askuppercase = confirm("do you want to use uppercase letters")
  var asknumbers = confirm("do you want to use numbers")
  var askspecialcharacters = confirm("do you want to use special characters")
  var lowercase="abcdefghijklmnopqrstuvwxyz"
  var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers="1234567890"
  var specialcharacters="!@#$%&"
  var chosencharacters=""
  if(asklowercase){
    chosencharacters += lowercase
    console.log (chosencharacters)
  }
  if(askuppercase){
    chosencharacters += uppercase
    console.log (chosencharacters)
  }
  if(asknumbers){
    chosencharacters += numbers
    console.log (chosencharacters)
  }
  if(askspecialcharacters){
    chosencharacters += specialcharacters
    console.log (chosencharacters)
  }
var finishpassword = "";
for (var i = 0; i < parseInt(passwordLength) ; i++) {
     finishpassword += chosencharacters.charAt(Math.floor(Math.random() * chosencharacters.length))  
}

return finishpassword
}

// Write password to the #password input
function writePassword() {
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
