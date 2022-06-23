let firstNumber = parseFloat(prompt("Enter first number"));

let operator = prompt("Enter choice: +, -, /, *");

let secondNumber = parseFloat(prompt("Enter second number"));

let result;

if (operator == "+") {
    result = firstNumber + secondNumber;
}

else if (operator == "-") {
    result = firstNumber - secondNumber;
}

else if (operator == "/") {
    result = firstNumber / secondNumber;
}

else if (operator == "*") {
    result = firstNumber * secondNumber;
}

alert(result)

