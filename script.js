// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var passLength = prompt('At least 8 characters but no more than 128');
  if (passLength >= 8 && passLength <= 128) {
    var lowerCasedCharacters = confirm('Would you like Lower Case characters?');
    var upperCasedCharacters = confirm('Would you like upper Case characters?');
    var numericCharacters = confirm('Would you like numbers?');
    var specialCharacters = confirm('Would you like Special Characters?');
     return {
        lowerCased: lowerCasedCharacters,
        upperCased: upperCasedCharacters,
        numeric: numericCharacters,
        special: specialCharacters,
        length: passLength
      }
  } else {
    alert('must have at least 8 characters but no more than 128');
  }
}
 function random(array){
  return array[Math.floor(Math.random()*array.length)];
 }

// Function for getting a random element from an array
function getRandom(userInput) {
  var passwordCombination =[]
  if(userInput.lowerCased){
    passwordCombination.push(random(lowerCasedCharacters));
  }
  if(userInput.upperCased){
    passwordCombination.push(random(upperCasedCharacters));
  }
  if(userInput.special){
    passwordCombination.push(random(specialCharacters));
  }
  if(userInput.numeric){
    passwordCombination.push(random(numericCharacters));
  }
  return random(passwordCombination)
}

// Function to generate password with user input
function generatePassword() {
var passwordOptions= getPasswordOptions(); 
  if (passwordOptions=== undefined) {
    return;
  }
var userInput = [passwordOptions.lowerCased, passwordOptions.upperCased, passwordOptions.numeric, passwordOptions.special ];
    if (!userInput.includes(true)) {
      alert('chose at least one of the options');
      return;
    }
  var passwordRezult=""
  for(i=0; i<passwordOptions.length ; i++){
    passwordRezult += getRandom(passwordOptions)
  }
  return passwordRezult;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  if (password!==undefined){
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

