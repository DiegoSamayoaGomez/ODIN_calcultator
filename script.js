
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
const btnTest = document.querySelector("#zero");
const btnTestOne = document.querySelector("#one");
const myArr = [];

let xd = btnTest.addEventListener("click", () => {
    myArr.push(0);
    return displayTest.textContent = myArr.join("");
})
let xd1 = btnTestOne.addEventListener("click", () => {
    myArr.push(1);
    return displayTest.textContent = myArr.join("");
})

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

function operate(a, b, sign) {
    a = Number(a);
    b = Number(b);

    console.log(typeof (a), typeof (b), typeof (sign));
    switch (sign) {
        case "+":
            console.log(add(a, b));
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
            console.log("Samamadakwe");
    }

}
let a = prompt("a");
let b = prompt("b");
let sign = prompt("sign");
operate(a, b, sign);

