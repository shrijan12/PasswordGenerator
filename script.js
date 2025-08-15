const passwordBox = document.getElementById("password");

const length = 12;

// Uppercase letters
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Lowercase letters
const lowercase = "abcdefghijklmnopqrstuvwxyz";

// Numbers
const number = "0123456789";

// Symbols (common ones)
const symbol = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";

const allChars = uppercase + lowercase + number + symbol;

function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
