let display = document.querySelector(".display");
let clear = document.querySelector(".clear-button");
let deleteButton = document.querySelector(".delete-button");
let zero = document.querySelector(".zero-button");
let one = document.querySelector(".one-button");
let two = document.querySelector(".two-button");
let three = document.querySelector(".three-button");
let four = document.querySelector(".four-button");
let five = document.querySelector(".five-button");
let six = document.querySelector(".six-button");
let seven = document.querySelector(".seven-button");
let eight = document.querySelector(".eight-button");
let nine = document.querySelector(".nine-button");
let divideButton = document.querySelector(".divide-button");
let multiplyButton = document.querySelector(".multiply-button");
let subtractButton = document.querySelector(".subtract-button");
let addButton = document.querySelector(".add-button");
let equals = document.querySelector(".equals-button");
let decimal = document.querySelector(".decimal");

let number1 = "";
let number2 = "";
let operator = "";
let result = "";

let isFirstClick = true;

function handleButtonClick(value) {
    if (isFirstClick) {
        display.textContent = "";
        isFirstClick = false;
    }
    display.textContent += value;
}

clear.addEventListener("click", function () {
    display.textContent = "0";
    number1 = "";
    number2 = "";
    operator = "";
    result = "";
    isFirstClick = true;
});

deleteButton.addEventListener("click", function () {
    display.textContent = display.textContent.slice(0, -1);
});

zero.addEventListener("click", function () {
    handleButtonClick("0");
});

one.addEventListener("click", function () {
    handleButtonClick("1");
});

two.addEventListener("click", function () {
    handleButtonClick("2");
});

three.addEventListener("click", function () {
    handleButtonClick("3");
});

four.addEventListener("click", function () {
    handleButtonClick("4");
});

five.addEventListener("click", function () {
    handleButtonClick("5");
});

six.addEventListener("click", function () {
    handleButtonClick("6");
});

seven.addEventListener("click", function () {
    handleButtonClick("7");
});

eight.addEventListener("click", function () {
    handleButtonClick("8");
});

nine.addEventListener("click", function () {
    handleButtonClick("9");
});

divideButton.addEventListener("click", function () {
    number1 = display.textContent;
    operator = "/";
    handleButtonClick(operator);
});

multiplyButton.addEventListener("click", function () {
    number1 = display.textContent;
    operator = "*";
    handleButtonClick(operator);
});

subtractButton.addEventListener("click", function () {
    number1 = display.textContent;
    operator = "-";
    handleButtonClick(operator);
});

addButton.addEventListener("click", function () {
    number1 = display.textContent;
    operator = "+";
    handleButtonClick(operator);
});

decimal.addEventListener("click", function () {
    handleButtonClick(".");
});

equals.addEventListener("click", function () {
    number2 = display.textContent.split(operator)[1];
    result = operate(operator, parseFloat(number1), parseFloat(number2));
    display.textContent = parseFloat(result).toFixed(2);
    isFirstClick = true;
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}


//keyboard support

window.addEventListener("keydown", function (e) {
    if (e.key >= "0" && e.key <= "9" || e.key === ".") {
        handleButtonClick(e.key);
    } else if (e.key === "+") {
        number1 = display.textContent;
        operator = "+";
        handleButtonClick(operator);
    } else if (e.key === "-") {
        number1 = display.textContent;
        operator = "-";
        handleButtonClick(operator);
    } else if (e.key === "*") {
        number1 = display.textContent;
        operator = "*";
        handleButtonClick(operator);
    } else if (e.key === "/") {
        number1 = display.textContent;
        operator = "/";
        handleButtonClick(operator);
    } else if (e.key === "Enter") {
        number2 = display.textContent.split(operator)[1];
        result = operate(operator, parseFloat(number1), parseFloat(number2));
        display.textContent = parseFloat(result).toFixed(2);
        isFirstClick = true;
    } else if (e.key === "Backspace") {
        display.textContent = display.textContent.slice(0, -1);
    } else if (e.key === "Escape") {
        display.textContent = "0";
        number1 = "";
        number2 = "";
        operator = "";
        result = "";
        isFirstClick = true;
    }
});

if(display.textContent.includes(decimal)){
    decimal.disabled = true;

}