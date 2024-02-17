/** კალკულატორი
ორ ოპერანდს შორის სხვადასხვა არითმეტიკული მოქმედებები (+, -, *, /, %, **)
რიცხვების ვალიდირება
შედეგის წარმატებით გამოტანა, სწორი ინპუტების შემთხვევაში javasc
*/

const VALID_OPERANDS = ['+', '-', '*', '/', '%', '**'];
let num1;
let num2;
let operand;
let result;
let gameContinues = true;


while (gameContinues) {
    num1 = getNumber();
    operand = getOperand();
    num2 = getNumber();

    result = calculate(num1, num2, operand);
    alert('The result of calculation is: ' + result);

    gameContinues = confirmGameContinue();
}

function getNumber() {
    while (true) {
        let input = prompt('Please enter number ' );
        if (!isNaN(input)) {
            return Number(input);
        }
        alert('You must enter a number. Try again...');
    }
}

function getOperand() {
    while (true) {
        let input = prompt('Please enter operand. valid operands are: ' + VALID_OPERANDS.join(" "));
        if (VALID_OPERANDS.includes(input)) {
            return input;
        }
        alert('Invalid operand. Try again...');
    }
}

function calculate(num1, num2, operand) {
    switch (operand) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
    }
}

function confirmGameContinue() {
    return confirm("Would you like to perform another calculation? ");
}
