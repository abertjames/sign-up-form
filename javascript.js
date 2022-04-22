let myInput = document.getElementById("user_password");
let lowerCase = document.getElementById("lowerCase");
let upperCase = document.getElementById("upperCase");
let isNum = document.getElementById("isNum");
let length = document.getElementById("length");
let symbol = document.getElementById("symbol");
let notPass = document.getElementsByName("password")

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}    

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    lowerCase.classList.remove("invalid");
    lowerCase.classList.add("valid");
  } else {
    lowerCase.classList.remove("valid");
    lowerCase.classList.add("invalid");
  }
  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    upperCase.classList.remove("invalid");
    upperCase.classList.add("valid");
  } else {
    upperCase.classList.remove("valid");
    upperCase.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    isNum.classList.remove("invalid");
    isNum.classList.add("valid");
  } else {
    isNum.classList.remove("valid");
    isNum.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8 && myInput.value.length <= 16) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate length
  let symbols = /[!@#$%^&*_=+-]/g;
  if(myInput.value.match(symbols)) {
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
  } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
  }

  let banned = /[ ~`(){} <> , . ? /]/g;
  if (myInput.value.match(banned)) {
    // Get the modal
    modal.style.display = "block";
    myInput.value=myInput.value.slice(0,-1);
    }
}
