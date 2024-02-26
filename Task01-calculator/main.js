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



function getNumber(text) {
    while (true) {
        let input = prompt(`Please enter number ${text}:\nClicking 'Cancel' will end the program` );
        if (input === null) {
            return null;
        } else if (input.length === 0) {
            alert('This field can not be empty. Try again...');
            continue;
        } else if (isNaN(+input)) {
            alert('You must enter a number. Try again...');
            continue;
        }
        return +input;
    }
}

function getOperand() {
    while (true) {
        let input = prompt(`Please enter operand. valid operands are: ${VALID_OPERANDS.join(' ')} :
                                            \nClicking 'Cancel' will end the program`);
        if (input === null) {
            return null;
        } else if (VALID_OPERANDS.includes(input)) {
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
    return confirm('Would you like to perform another calculation? ');
}


function gameRunner() {
    while (gameContinues) {
        num1 = getNumber('1');
        if (num1 === null) {
            return;
        }
        operand = getOperand();
        if (operand === null) {
            return;
        }
        num2 = getNumber('2');
        if (num2 === null) {
            return;
        }

        result = calculate(num1, num2, operand);
        alert('The result of calculation is: ' + result);

        gameContinues = confirmGameContinue();
    }
}


gameRunner();
