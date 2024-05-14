
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


