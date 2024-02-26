/**
 * ჯეირანი (თამაში)
 * მომხარებელს შემოაქვს 3 მნიშვნელობიდან ერთ-ერთი: „მაკრატელი“, „ჭა“, „ქაღალდი“.
 * პირველ შემოტანილ მნიშვნელობას შევადარებთ მეორე შემოტანილ მნიშვნელობას და
 * ჯეირანის წესების მიხედვით გამოვიტანთ ან გამარჯვებულს ან ფრის შედეგს.
 * საჭიროა ინპუტების ვალიდაცია
 */



const Options = Object.freeze({
    ROCK: 1,
    SCISSORS: 2,
    PAPER: 3
});


class Scanner {

    MIN_INPUT = 1;
    MAX_INPUT = 3;

    getInput(player) {
        while (true) {
            let input = prompt(`${player}, please enter a number:\n1 - Rock,\n2 - Scissors\n3 - Paper` +
                '\n(Clicking \'Cancel\' will end the game)');
            if (input === null) {
                return null;
            } else if (isNaN(+input)) {
                alert('Invalid input. You have to enter a natural number from 1 to 3');
                continue;
            } else if (Math.floor(+input) !== +input) {
                alert('Invalid input. You must enter a natural number.\nValid inputs are numbers from 1 to 3');
                continue;
            } else if (+input < this.MIN_INPUT || +input > this.MAX_INPUT) {
                alert('Invalid input. Valid inputs are numbers from 1 to 3');
                continue;
            }
            return +input;
        }
    }

}


class GameRunner {

    scanner;

    constructor() {
        this.scanner = new Scanner();
    }

    run() {
        const input1 = this.scanner.getInput('Player 1');
        if (input1 === null) {
            return;
        }
        const input2 = this.scanner.getInput('Player 2');
        if (input2 === null) {
            return;
        }

        if (input1 === input2) {
            console.log('It\'s a DRAW');
            return;
        }

        if (input1 === Options.ROCK) {
            if (input2 === Options.SCISSORS) {
                console.log('Rock smashes scissors. Player 1 won!');
            } else {
                console.log('Paper covers rock. Player 2 won!');
            }
        } else if (input1 === Options.SCISSORS) {
            if (input2 === Options.ROCK) {
                console.log('Rock smashes scissors. Player 2 won!');
            } else {
                console.log('Scissors cut paper. Player 1 won!');
            }
        } else {  // PAPER
            if (input2 === Options.SCISSORS) {
                console.log('Scissors cut paper. Player 2 won!');
            } else {
                console.log('Paper covers rock. Player 1 won!');
            }
        }

    }

}

console.log('Game rules:\nPlayers enter 1 out of 3 options:' +
            '\nOption 1. ROCK\nOption 2. Scissors\nOption 3. Paper' +
            '\nRock wins against scissors; paper wins against rock; and scissors wins against paper.' +
            '\nIf both players choose the same option, it is considered a draw');


new GameRunner().run();
