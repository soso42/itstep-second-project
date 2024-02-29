/** კალკულატორი
ორ ოპერანდს შორის სხვადასხვა არითმეტიკული მოქმედებები (+, -, *, /, %, **)
რიცხვების ვალიდირება
შედეგის წარმატებით გამოტანა, სწორი ინპუტების შემთხვევაში javasc
*/



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
    const VALID_OPERANDS = ['+', '-', '*', '/', '%', '**'];
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
            if (num2 === 0) {
                alert('Error! Division by ZERO!');
                return null;
            }
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
    let gameContinues = true;
    while (gameContinues) {
        let num1 = getNumber('1');
        if (num1 === null) {
            return;
        }
        let operand = getOperand();
        if (operand === null) {
            return;
        }
        let num2 = getNumber('2');
        if (num2 === null) {
            return;
        }

        let result = calculate(num1, num2, operand);
        if (result) {
            alert('The result of calculation is: ' + result);
        }

        gameContinues = confirm('Would you like to perform another calculation? ');
    }
}


gameRunner();
