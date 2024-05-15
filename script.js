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

let firstNumber;
let secondNumber;
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
    if (result === 0) {
        firstNumber = myArr.join("");
        firstNumber = parseFloat(firstNumber);
        console.log(firstNumber);
        myArr.length = 0;
        sign = "%";

        return displayTest.textContent = "%";

    } else {
        myArr.length = 0;
        firstNumber = result;
        sign = "%";
        return displayTest.textContent = "%";

    }
})

btnInverseSign.addEventListener("click", () => {
    myArr.pop();
    console.log("eliminado", myArr);
    return displayTest.textContent = myArr.join("");
})

btnDivide.addEventListener("click", () => {
    if (result === 0) {
        firstNumber = myArr.join("");
        firstNumber = parseFloat(firstNumber);
        console.log(firstNumber);
        myArr.length = 0;
        sign = "/";

        return displayTest.textContent = "/";

    } else {
        myArr.length = 0;
        firstNumber = result;
        sign = "/";
        return displayTest.textContent = "/";
    }
})

btnMultiply.addEventListener("click", () => {
    if (result === 0) {
        firstNumber = myArr.join("");
        firstNumber = parseFloat(firstNumber);
        console.log(firstNumber);
        myArr.length = 0;
        sign = "*";

        return displayTest.textContent = "*";

    } else {
        myArr.length = 0;
        firstNumber = result;
        sign = "*";

        return displayTest.textContent = "*";
    }
})


btnAdd.addEventListener("click", () => {

    if (result === 0) {
        firstNumber = myArr.join("");
        firstNumber = parseFloat(firstNumber);
        console.log(firstNumber);
        myArr.length = 0;
        sign = "+";

        return displayTest.textContent = "+";

    } else {
        myArr.length = 0;
        firstNumber = result;
        sign = "+";

        return displayTest.textContent = "+";
    }
})
btnRest.addEventListener("click", () => {
    if (result === 0) {
        firstNumber = myArr.join("");
        firstNumber = parseFloat(firstNumber);
        console.log(firstNumber);
        myArr.length = 0;
        sign = "-";

        return displayTest.textContent = "-";

    } else {
        myArr.length = 0;
        firstNumber = result;
        sign = "-";

        return displayTest.textContent = "-";
    }
})

// DO the math pls

btnOperate.addEventListener("click", () => {
    secondNumber = myArr.join("");
    secondNumber = parseFloat(secondNumber);
    console.log("first", firstNumber);
    console.log("second", secondNumber);
    console.log("sign", sign);

    if (sign == "%") {
        return operate(firstNumber, 1, sign);
    } else {
        return operate(firstNumber, secondNumber, sign);

    }
})

btnClear.addEventListener("click", () => {
    myArr.length = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    sign = undefined;
    result = 0;
    displayTest.textContent = "|";
})

//Basic math operations

function add(firstNumber, secondNumber) {
    return displayTest.textContent = (firstNumber + secondNumber).toFixed(2);
}

function rest(firstNumber, secondNumber) {
    return displayTest.textContent = (firstNumber - secondNumber).toFixed(2);
}

function multiply(firstNumber, secondNumber) {
    return displayTest.textContent = (firstNumber * secondNumber).toFixed(2);
}

function divide(firstNumber, secondNumber) {
    return displayTest.textContent = (secondNumber > 0) ? (firstNumber / secondNumber).toFixed(2) : ("🧠n´t?");
}

function percentage(firstNumber) {
    return displayTest.textContent = firstNumber / 100;
}


//Get two numbers and one operator, depending on the operator, call a certain function
function operate(firstNumber, secondNumber, sign) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    try {

        if ((isNaN(firstNumber)) || (isNaN(secondNumber))) {
            displayTest.textContent = "Error";
        } else {
            console.log(typeof (firstNumber), typeof (secondNumber), typeof (sign));
            switch (sign) {
                case "+":
                    result = (add(firstNumber, secondNumber));
                    console.log("result", result);

                    break;
                case "-":
                    result = (rest(firstNumber, secondNumber));
                    console.log("result", result);

                    break;
                case "*":
                    result = (multiply(firstNumber, secondNumber));
                    console.log("result", result);

                    break;
                case "/":
                    result = (divide(firstNumber, secondNumber));
                    console.log("result", result);

                    break;
                case "%":
                    result = (percentage(firstNumber));
                    console.log("result", result);
                    break;
                //
                default:
                    displayTest.textContent = "Not a valid operator";
            }
            // After calculating the result, update the firstNumber to be the result for the next operation
            firstNumber = result;
            // Clear the secondNumber and sign for the next operation
            secondNumber = undefined;
            sign = undefined;
            // Display the result
            displayTest.textContent = result;
        }
    } catch (err) {

        displayTest.textContent = "Something went wrong";
        myArr.length = 0;
        firstNumber = undefined;
        secondNumber = undefined;
        sign = undefined;
        result = 0;

    }

}




/*
Crear un array para el primer numero, cuando se presione
un operador guardar el valor del array en una variable que será A
luego, vaciar dicho array y hacer lo mismo para obtener
la variable B

 */