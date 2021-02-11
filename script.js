// Assignment Code
let generateBtn = document.querySelector("#generate");
let step = "password-length"
let passwordLength 
let characterType
let uppercaseType
let lowercaseType
let numericType
let specialType
function displayForm(text,value) {
  value = window.prompt(text)
}

function generatePassword() {
  let password = ""
  password = password.toUpperCase()
  return password
}
function generatePassword() { //added by Bryce 
  let password = ""
  password = password.toLowerCase
  return password
}
function generatePassword() { //added by Bryce
  let password = ""
  password = password.numericType
  return password
}
function generatePassword() { //added by Bryce 
  let password = ""
  password = password.specialType
  return password
}

// Write password to the #password input
function writePassword() {
  displayForm("Enter a length between 8 and 128 characters",passwordLength)
  displayForm("Enter a choice of lowercase",characterType) //would this be lowercaseType or characterType? (by Bryce )
  displayForm("Enter a choice of uppercase",uppercaseType)
  displayForm("Enter a Numeric value",numericType)
  displayForm("Enter a special character",specialType)
  console.log("Password")
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  addForm()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
