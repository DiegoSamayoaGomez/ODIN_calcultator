
/*

const btnTest = document.querySelector("#zero");
const displayTest = document.querySelector(".operaciones");
const btnTestOne = document.querySelector("#one");
let sum = 0;
let xd = btnTest.addEventListener("click", () => {
    sum += 1;
    console.log(sum);
    displayTest.textContent = sum;
    return "uwu";
})
let xd1 = btnTestOne.addEventListener("click", () => {

    displayTest.textContent = 0;
    return "uwu";
})
*/

const displayTest = document.querySelector(".operaciones");
//Numbers
const btnZero = document.querySelector("#zero");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
//Operators
const btnDecimal = document.querySelector("#decimalDot");
const btnPercentage = document.querySelector("#percentage");
const btnInverseSign = document.querySelector("#reverseSign");
const btnDivide = document.querySelector("#divide");
const btnMultiply = document.querySelector("#multiply");
const btnAdd = document.querySelector("#add");
const btnRest = document.querySelector("#minus");
//Result
const btnOperate = document.querySelector("#result");
const btnClear = document.querySelector("#clear");



const myArr = [];

let a;
let b;
let sign;
let result = 0;


//Insert a number every time a button was pressed
btnZero.addEventListener("click", () => {
    myArr.push(0);
    return displayTest.textContent = myArr.join("");
})
btnOne.addEventListener("click", () => {
    myArr.push(1);
    return displayTest.textContent = myArr.join("");
})

btnTwo.addEventListener("click", () => {
    myArr.push(2);
    return displayTest.textContent = myArr.join("");
})
btnThree.addEventListener("click", () => {
    myArr.push(3);
    return displayTest.textContent = myArr.join("");
})
btnFour.addEventListener("click", () => {
    myArr.push(4);
    return displayTest.textContent = myArr.join("");
})
btnFive.addEventListener("click", () => {
    myArr.push(5);
    return displayTest.textContent = myArr.join("");
})
btnSix.addEventListener("click", () => {
    myArr.push(6);
    return displayTest.textContent = myArr.join("");
})
btnSeven.addEventListener("click", () => {
    myArr.push(7);
    return displayTest.textContent = myArr.join("");
})
btnEight.addEventListener("click", () => {
    myArr.push(8);
    return displayTest.textContent = myArr.join("");
})
btnNine.addEventListener("click", () => {
    myArr.push(9);
    return displayTest.textContent = myArr.join("");
})


//Insert a sign every time a button was pressed
btnDecimal.addEventListener("click", () => {
    myArr.push(".");
    return displayTest.textContent = myArr.join("");
})
btnPercentage.addEventListener("click", () => {
    myArr.push("%");
    return displayTest.textContent = myArr.join("");
})
btnInverseSign.addEventListener("click", () => {
    myArr.push("+/-");
    return displayTest.textContent = myArr.join("");
})
btnDivide.addEventListener("click", () => {
    myArr.push("/");
    return displayTest.textContent = myArr.join("");
})
btnMultiply.addEventListener("click", () => {
    myArr.push("*");
    return displayTest.textContent = myArr.join("");
})
btnAdd.addEventListener("click", () => {


    a = myArr.join("");
    a = parseFloat(a);
    console.log(a);
    myArr.length = 0;
    sign = "+";

    return displayTest.textContent = "+";
})
btnRest.addEventListener("click", () => {
    myArr.push("-");
    return displayTest.textContent = myArr.join("");
})

// DO the math pls

btnOperate.addEventListener("click", () => {
    b = myArr.join("");
    b = parseFloat(b);
    console.log(b);
 
    return operate(a, b, sign);

})


//Basic math operations

function add(a, b) {
    return displayTest.textContent = (a + b).toFixed(2);
}

function rest(a, b) {
    return displayTest.textContent = (a - b).toFixed(2);
}

function multiply(a, b) {
    return displayTest.textContent = (a * b).toFixed(2);
}

function divide(a, b) {
    return displayTest.textContent = (b > 0) ? (a / b).toFixed(2) : ("🧠n´t?");
}

//Get two numbers and one operator, depending on the operator, call a certain function
function operate(a, b, sign) {
    a = Number(a);
    b = Number(b);
    if ((isNaN(a)) && (isNaN(b))) {
        displayTest.textContent = "🧠n´t? just numbers";
    } else {
        console.log(typeof (a), typeof (b), typeof (sign));
        switch (sign) {
            case "+":
                result = (add(a, b));
                console.log("result", result);
                break;
            case "-":
                console.log(rest(a, b));
                break;
            case "*":
                console.log(multiply(a, b));
                break;
            case "/":
                console.log(divide(a, b));
                break;
            default:
                displayTest.textContent = "Not a valid operator";
        }
    }
}




/*
Crear un array para el primer numero, cuando se presione
un operador guardar el valor del array en una variable que será A
luego, vaciar dicho array y hacer lo mismo para obtener
la variable B

 */