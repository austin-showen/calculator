let currentValStr = "";
let prevValStr = "";
let currentOperator = "";

function operate(operand, a, b) {
    switch (operand) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) return "ERROR";
            else return a / b;
    }
}

function numberClick() {
    currentValStr += this.textContent;
    output.textContent = currentValStr;
    return;
}

function operatorClick() {
    if (currentValStr) {
        if (prevValStr) {
            let result = "0";
            if (currentOperator) {
                result = String(operate(currentOperator, Number(prevValStr), Number(currentValStr)));
            }
            result = trim(result);
            prevValStr = result;
            currentValStr = "";
            output.textContent = result;
            currentOperator = this.textContent;
        } else {
            prevValStr = currentValStr;
            currentValStr = "";
            currentOperator = this.textContent;
        }
    } else if (prevValStr) {
        currentOperator = this.textContent;
    } else return;
}

function equalsClick() {
    if (prevValStr && currentValStr && currentOperator) {
        let result = operate(currentOperator, Number(prevValStr), Number(currentValStr));
        result = trim(result);
        output.textContent = result;
        currentValStr = "";
        prevValStr = result;
        currentOperator = "";
    }
}

function clearClick() {
    currentValStr = "";
    prevValStr = "";
    currentOperator = "";
    prevOperator = "";
    output.textContent = 0;
}

function trim(result) {
    const resultNum = Number(result);
    if (resultNum.length <= 13) {
        return result;
    } else {
        const resultNumRounded = String(Math.round(resultNum * 100000)/100000);
        if (resultNumRounded.length <= 13){
            return resultNumRounded;
        }
        else return "ERROR";
    }
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