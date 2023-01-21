let output = document.querySelector("#output");

let charListLetters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z"
];

let charListLettersNumbers = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9" 
]

let charListLettersSymbols = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^",
    "&","*", "(",")","_","-","+","=","{","[","}","]",",","|",":",
    ";","<", ">",".","?", "/"
]

let charListAll = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",
    ">",".","?", "/"
];

let justLetters = document.querySelector("#just-letters");
let addNum = document.querySelector("#add-num");
let addSym = document.querySelector("#add-sym");
let addBoth = document.querySelector("#add-both");

function userInput() {
    output.innerHTML = "";
    //let integerInputValue = parseInt(inputValue);

    let inputValue = document.getElementById("user-input").value;

    if (isNaN(inputValue)) {
        output.innerHTML = "Invalid Input!";
    } else {
        if (addNum.checked) {
            for (let i = 0; i < parseInt(inputValue); i++) {
                output.innerHTML += charListLettersNumbers[Math.floor(Math.random() * charListLettersNumbers.length)];
            }
        } else if (addSym .checked) {
            for (let i = 0; i < parseInt(inputValue); i++) {
                output.innerHTML += charListLettersSymbols[Math.floor(Math.random() * charListLettersSymbols.length)];
            }
        } else if (addBoth.checked) {
            for (let i = 0; i < parseInt(inputValue); i++) {
                output.innerHTML += charListAll[Math.floor(Math.random() * charListAll.length)];
            }
        } else if (justLetters.checked)  {
            for (let i = 0; i < parseInt(inputValue); i++) {
                output.innerHTML += charListLetters[Math.floor(Math.random() * charListLetters.length)];
            }
        } else {
            for (let i = 0; i < parseInt(inputValue); i++) {
                output.innerHTML += charListLetters[Math.floor(Math.random() * charListLetters.length)];
            }
        }

    }
    
}

function cleaner() {
    output.innerHTML = "";
}

document.getElementById("output").onclick = function() {
    var text = document.getElementById("output").textContent;
 
    navigator.clipboard.writeText(text);

    alert("Copied: " + text);
}