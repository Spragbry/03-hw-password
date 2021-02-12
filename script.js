// Assignment Code
let generateBtn = document.querySelector("#generate");
let step = "password-length"
let passwordLength = 8
let uppercaseType
let lowercaseType
let numericType
let specialType
let characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperCaseCharacters = characters.map((value)=>{
  return value.toUpperCase()
})
let specialCharacters = ["!","@","#",'$','%','^','&','*','+','=','{','}','?','~']
let numbers = ["1","2","3","4","5","6","7","8","9","0"]
let validCharacters = []

function displayForm(text) {
  value = window.prompt(text)
  console.log("display form value", value)
  return value
}

function generatePassword() {
  let password = ""
  password = password.toUpperCase()
  return password
}

function generateRandom(arr) {
  console.log("Array Value",arr)
  let randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function writePassword() {
  passwordLength = displayForm("Enter a length between 8 and 128 characters")
  lowercaseType = displayForm("Would you like to include lowercase characters?") 
  uppercaseType = displayForm("Would you like to include uppercase characters?")
  numericType = displayForm("Would you like to include Numeric values?")
  specialType = displayForm("Would you like to inclide special characters?")
  console.log("Password length", passwordLength)
  
  if(Number(passwordLength) < 8) {
    passwordLength = 8
  }

  if(Number(passwordLength) > 128) {
    passwordLength = 128
  }
  
  if(typeof Number(passwordLength) !== "number") {
    passwordLength = 8
  }
  
  if(lowercaseType && (lowercaseType.toUpperCase() === "YES")) {
    validCharacters = validCharacters.concat(characters)
  }
  if(uppercaseType && (uppercaseType.toUpperCase() === "YES")) {
    validCharacters = validCharacters.concat(upperCaseCharacters)
  }
  if(numericType && (numericType.toUpperCase() === "YES")) {
    validCharacters = validCharacters.concat(numbers)
  }
  if(specialType && (specialType.toUpperCase() === "YES")) {
    validCharacters = validCharacters.concat(specialCharacters)
  }
  console.log("Valid Characters",validCharacters)
  let password = ""
  for(let i=0; i < passwordLength; ++i) {
    password += generateRandom(validCharacters)
  } 
  console.log("password",password)

  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
