let buttonOne = document.getElementById("button1")
let numberTwo = document.getElementById("number2")

let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
             "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
             "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
             "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
             "&", "£", "$", "%", "^", "*", "@", "+", "-", "=", "?", "!", "(", ")",
             "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
             
const passElement1 = document.getElementById("pass1")
const passElement2 = document.getElementById("pass2")
const passElement3 = document.getElementById("pass3")
const passElement4 = document.getElementById("pass4")
             
let passLenVal = numberTwo.value

passElement1.value = ""
passElement2.value = ""
passElement3.value = ""
passElement4.value = ""

buttonOne.addEventListener("click", function() {
    fourPass()
})

numberTwo.addEventListener("change", function() {
    refresh()
})

function generatePass() {
    let randNum = 0
    let randChar = ""
    let passString = ""
    for (let i = 0; i < passLenVal; i++) {
        randNum = Math.floor(Math.random() * 76)
        randChar = chars[randNum]
        passString += randChar
    }
    return passString
}

function fourPass() {
    let passString1 = generatePass()
    let passString2 = generatePass()
    let passString3 = generatePass()
    let passString4 = generatePass()
    
    passElement1.value = passString1
    passElement2.value = passString2
    passElement3.value = passString3
    passElement4.value = passString4
}

function refresh() {
    passLenVal = numberTwo.value
}