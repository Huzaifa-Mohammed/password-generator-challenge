// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const myLower = [String.fromCharCode(Math.floor(Math.random() * 26) + 97)];
const myUpper = [String.fromCharCode(Math.floor(Math.random() * 26) + 65)];
const myNumber = [String.fromCharCode(Math.floor(Math.random() * 10) + 48)];
const mySymbol = [String.fromCharCode(Math.floor(Math.random() * 11) + 33)];
console.log(mySymbol);
EmptyArr = [];


function generatePassword() {


    var passwordLength = window.prompt("Please pick length of password from 8 to 128");


    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please a valid length");
        generatePassword();
    }

    var confirmSymbol = window.confirm("Click Ok if you want Symbols in your Password");
    if (!confirmSymbol) {
        window.alert("Your Password will not contain Symbols");

    }
    var confirmNumbers = window.confirm("Click Ok if you want Numbers in your Password");
    if (!confirmNumbers) {
        window.alert("Your password Will not contain Numbers");
    }
    var confirmLower = window.confirm("Click Ok if you want Lower Case in your Password");
    if (!confirmLower) {
        window.alert("Your password will not contain Lower Case");
    }
    var confrimUpper = window.confirm("Click Ok if you want Upper Case in your Password");
    if (!confrimUpper) {
        window.alert("Your password will not contain Upper Case");
    }

    //when picked all yes or all no
    if (!confirmNumbers && !confrimUpper && !confirmLower && !confirmSymbol) {
        alert("You must make at least 1 valid character selection!");
        generatePassword();
        console.log(EmptyArr);
    } else if (confirmNumbers && confrimUpper && confirmLower && confirmSymbol) {
        EmptyArr = myUpper.concat(myLower, myNumber, mySymbol);
        console.log(EmptyArr);
    }
    // chances of picking the prompt
    //4 items myupper = a, mynumber =b , mylower =c, mysymbol = d
    // probabilty of 3 abc,abd,bdc,acd
    // probabilty of 2 ab, ac , ad , bc , bd , cd
    // probabilyty of 1 a,b,c,d


    // probabilty of 3 abc,abd,bdc,acd
    //when picked any 3
    else if (confrimUpper && confirmNumbers && confirmLower) {
        EmptyArr = myUpper.concat(myNumber, myLower);
    } else if (confrimUpper && confirmNumbers && confirmSymbol) {
        EmptyArr = mySymbol.concat(myUpper, myNumber);
    } else if (confirmNumbers && confirmSymbol && confirmLower) {
        EmptyArr = myNumber.concat(mySymbol, myLower);
    } else if (confrimUpper && confirmLower && confirmSymbol) {
        EmptyArr = myLower.concat(mySymbol, myUpper);
        console.log(EmptyArr);
    }




    // probabilty of 2 ab, ac , ad , bc , bd , cd
    else if (confrimUpper && confirmNumbers) {
        EmptyArr = myUpper.concat(myNumber);
    } else if (confrimUpper && confirmLower) {
        EmptyArr = myUpper.concat(myLower);
    } else if (confrimUpper && confirmSymbol) {
        EmptyArr = myUpper.concat(mySymbol);
    } else if (confirmNumbers && confirmLower) {
        EmptyArr = myNumber.concat(myLower);
    } else if (confirmNumbers && confirmSymbol) {
        EmptyArr = myNumber.concat(mySymbol);
    } else if (confirmLower && confirmSymbol) {
        EmptyArr = myLower.concat(mySymbol);
        console.log(EmptyArr);

    }
    // when picked any one single
    // probabilyty of 1 a,b,c,d
    else if (confirmSymbol) {
        EmptyArr = mySymbol;
    } else if (confrimUpper) {
        EmptyArr = myUpper;
    } else if (confirmLower) {
        EmptyArr = myLower;
    } else if (confirmNumbers) {
        EmptyArr = myNumber;
        console.log(EmptyArr);
    }



    console.log(EmptyArr);


    let MyPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        MyPassword = MyPassword + EmptyArr[Math.floor(Math.random() * EmptyArr.length)];

    }
    return MyPassword;

}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);