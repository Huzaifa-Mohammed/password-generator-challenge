// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const myLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
const myUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
const myNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
const mySymbol = String.fromCharCode(Math.floor(Math.random() * 11) + 33);
console.log(mySymbol);



function generatePassword() {
    console.log("hello ");

    var passwordLength = window.prompt("Please pick length of password from 8 to 128");

    var confirmSymbol = window.confirm("Click Ok if you want Symbols in your Password");
    if (confirmSymbol) {
        getSymbol();

    } else {
        window.alert("Your Password will not contain Symbols");
    }
    var confirmNumbers = window.confirm("Click Ok if you want Numbers in your Password");
    if (confirmNumbers) {
        getNumber();
    } else {
        window.alert("Your password Will not contain Numbers");
    }
    var confirmLower = window.confirm("Click Ok if you want Lower Case in your Password");
    if (confirmLower) {
        getLower();
    } else {
        window.alert("Your password will not contain Lower Case");
    }
    var confrimUpper = window.confirm("Click Ok if you want Upper Case in your Password");
    if (confrimUpper) {
        getUpper();

    } else {
        window.alert("Your password will not contain Upper Case");
    }

    //    return (getNumber() + getSymbol() + getUpper() + getLower());
    var RandomPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        RandomPassword = RandomPassword + choices[Math.floor(Math.random() * choices.length)];

    }

}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);