const container = document.querySelector("#container");

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

let num1, num2, operator = undefined;
let operatorClicked = false;
const display = document.querySelector("#display");
let displayValue = display.textContent;

function operate(operator, num1, num2) {
    if (operator == "+") return add(num1, num2);
    if (operator == "-") return subtract(num1, num2);
    if (operator == "x") return multiply(num1, num2);
    if (operator == "/") return divide(num1, num2);
}

function updateDisplay(input) {
    if (displayValue.length < 16) {
        display.textContent += input;
        displayValue = display.textContent;
    }
}

function clearDisplay() {
    display.textContent = "";
    displayValue = display.textContent;
}

function doMath() {
    num2 = display.textContent;
    if ((operator == "/") && (num2 == 0)) {
        clearAll();
        display.textContent = "In your dreams!";
    }
    else {
        let calculation = operate(operator, num1, num2);
        display.textContent = calculation;
        displayValue = calculation;
        num1 = displayValue;
    }
}

function clearData() {
    num1, num2, operator = undefined;
    operatorClicked = false;
    displayValue = "";
}

function clearAll() {
    clearDisplay();
    clearData();
}

document.querySelectorAll(".input").forEach(item => {
    item.addEventListener("click", event => {
        if (operatorClicked == true) clearDisplay();

        if ((item.textContent == ".") && (displayValue.includes(".")));
        else {
            updateDisplay(item.textContent);
            displayValue = display.textContent;
            operatorClicked = false;
        }
    })
})

document.querySelectorAll(".operate").forEach(item => {
    item.addEventListener("click", event => {
        if (num1 == undefined) {
            num1 = displayValue;
            operator = item.textContent;
            operatorClicked = true;
        }
        else {
            doMath();
            display.textContent = num1;
            operator = item.textContent;
            operatorClicked = true;
        }
    })
})

document.querySelector("#equals").addEventListener("click", event => {
    doMath();
})

document.querySelector("#clear").addEventListener("click", event => {
    if (displayValue > 1) {
        let displayLength = displayValue.length;
        let newDisplay = displayValue.toString().slice(0, displayLength - 1);
        display.textContent = newDisplay;
        displayValue = newDisplay;
    }
    else {
        clearAll();
    }
})

document.querySelector("#allclear").addEventListener("click", event => {
    clearAll();
})