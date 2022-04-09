const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(operand, a, b) {
    switch (operand) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}

function onClick(e) {
    console.log(this.textContent);
    return this.textContent;
}

buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", onClick));