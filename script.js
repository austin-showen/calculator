let currentValStr = "";
let prevValStr = "";

function operate(operand, a, b) {
    switch (operand) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}

function numberClick() {
    currentValStr += this.textContent;
    output.textContent = currentValStr;
    return;
}

function operatorClick() {
    console.log(this.textContent);
    return;
}

function equalsClick() {
    console.log(this.textContent);
    return;
}

function clearClick() {
    console.log(this.textContent);
    return;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", numberClick));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", operatorClick));

const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsClick);

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearClick);

//todo: trim calculation if length > 13;
//first round to 3? 4? 5? decimal places, then trim 

output = document.querySelector(".output");
output.textContent = 0; //todo: update output with every calculate operation