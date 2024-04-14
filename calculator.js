let display = document.getElementById("display");

function dig(digit) {
    display.value += digit
}
function clearDisplay() {
    display.value = "";
}
function anyOper(operator) {
    display.value += ' ' + operator + ' ';
}
function calc() {
    let expression = display.value;
    let parts = expression.split(' ');
    let result = parseFloat(parts[0]);

    for (let i = 1; i < parts.length; i += 2) {
        let operator = parts[i];
        let nextNamber = parseFloat(parts[i + 1]);

        switch (operator) {
            case '+':
                result += nextNamber;
                break;
            case '-':
                result -= nextNamber;
                break;
            case '*':
                result *= nextNamber;
                break;
            case '/':
                result /= nextNamber;
                break;
        }
    }
    display.value = result;
} 