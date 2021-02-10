// Assignment Code
let generateBtn = document.querySelector("#generate");
let step = "password-length"
let passwordLength 
let characterType
function displayForm(text,value) {
  value = window.prompt(text)
}

function generatePassword() {
  let password = ""
  password = password.toUpperCase()
  return password
}

// Write password to the #password input
function writePassword() {
  displayForm("Enter a length between 8 and 128 characters",passwordLength)
  displayForm("Enter a choice of lowercase, uppercase, numeric, and/or special characters",characterType)
  console.log("Password")
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  addForm()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
