const passwordBox = document.getElementById("password");
const length = 12;

const upprCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowrCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbls = "!@#$%*(){}[]_";
const allchar = upprCase + lowrCase + number + symbls ;

// function getchoice(){
//     var len = ;

// }

function generatepassword(){
    let password = "";
    password += upprCase[Math.floor(Math.random() * upprCase.length)];
    password += lowrCase[Math.floor(Math.random() * lowrCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbls[Math.floor(Math.random() * symbls.length)];

    while(length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

    passwordBox.value = password;
}