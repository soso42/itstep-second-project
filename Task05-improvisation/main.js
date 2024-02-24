/**
 * იმპროვიზაცია
 * სურვილისამებრ შეგიძლიათ, თქვენი ლოგიკა თამაში ან ლოგიკა მოიფიქროთ, რის მიხედვითაც წარმოადგენთ თქვენს ჯავასკრიპტის ცოდნას
 * კოდი უნდა შეიცავდეს მინიმუმ:
 * 1 ციკლს
 * 1 პირობით ბმას (if/else ან switch)
 * 1 ინპუტს (prompt ან input დან დომით ამოღებას)
 */



class Table {

    grid = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];


    setCell(coordinates, player) {
        let row = coordinates.row - 1;
        let col = coordinates.column - 1;
        this.grid[row][col] = player;
    }

    clearTable() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.grid[i][j] = ' ';
            }
        }
    }

    isFreeCell(coordinates) {
        let row = coordinates.row - 1;
        let col = coordinates.column - 1;
        return this.grid[row][col] === ' ';
    }

    isWinner(player) {
        return (this.grid[0][0] === player && this.grid[0][1] === player && this.grid[0][2] === player) ||
            (this.grid[1][0] === player && this.grid[1][1] === player && this.grid[1][2] === player) ||
            (this.grid[2][0] === player && this.grid[2][1] === player && this.grid[2][2] === player) ||
            (this.grid[0][0] === player && this.grid[1][0] === player && this.grid[2][0] === player) ||
            (this.grid[0][1] === player && this.grid[1][1] === player && this.grid[2][1] === player) ||
            (this.grid[0][2] === player && this.grid[1][2] === player && this.grid[2][2] === player) ||
            (this.grid[0][0] === player && this.grid[1][1] === player && this.grid[2][2] === player) ||
            (this.grid[0][2] === player && this.grid[1][1] === player && this.grid[2][0] === player);
    }

    toString() {
        let result = '-------------\n';
        for (let row of this.grid) {
            result += '|';
            for (let col of row) {
                result = result + ' ' + col + ' |';
            }
            result += '\n';
        }
        result += '-------------';
        return result;
    }
}



class Coordinates {
    row;
    column;
}



class Scanner {

    getCoordinates() {
        const coordinates= new Coordinates();
        coordinates.row = this.getSingleInput('row');
        if (coordinates.row === null) {
            return null;
        }
        coordinates.column = this.getSingleInput('column');
        if (coordinates.column === null) {
            return null;
        }
        return coordinates;
    }

    getSingleInput(text) {
        while (true) {
            let input = +prompt('Please enter a ' + text.toUpperCase() + ' number - 1, 2 or 3  ' +
                '(Clicking \'Cancel\', entering \'0\', or leaving the field empty will end the game)');
            if (isNaN(input) || input < 0 || input >= 4) {
                alert('Invalid input. Try again');
                continue;
            } else if (input === 0) {
                return null;
            }
            return input;
        }
    }

}



class GameRunner {
    table;
    scanner;
    gameTurn;
    player;
    coordinates;

    constructor() {
        this.table = new Table();
        this.scanner = new Scanner();
    }


    run() {
        this.printIntro();
        this.gameTurn = 0;
        this.table.clearTable();

        console.log('NEW GAME STARTED');

        while (this.gameTurn < 9) {
            this.player = ++this.gameTurn % 2 === 1 ? 'X' : 'O';
            console.log(`Player ${this.player} turn. Please enter coordinates: `);

            while (true) {
                this.coordinates = this.scanner.getCoordinates();
                if (!this.coordinates) {
                    console.log('Game terminated!');
                    return;
                }
                if (!this.table.isFreeCell(this.coordinates)) {
                    alert('The cell is not free. Please choose another one!');
                    continue;
                }
                break;
            }

            this.table.setCell(this.coordinates, this.player);

            console.log(this.table.toString());

            if (this.table.isWinner(this.player)) {
                console.log(`Player ${this.player} WON! Game ended...`);
                break;
            }

        }

        if ((!this.table.isWinner('X') && !this.table.isWinner('O')) && this.gameTurn >= 9) {
            console.log('DRAW. There was no winner in this game. Try again.')
        }
    }

    printIntro() {
        console.log('Classic tic-tac-toe game is a game for two players who take turns marking the spaces ' +
            'in a three-by-three grid with X or O. The player who succeeds in placing three of their marks ' +
            'in a horizontal, vertical, or diagonal row is the winner.');
        console.log('Grid example: ');
        console.log('     1   2   3 \n' +
                    '   -------------\n' +
                    "1  | X |   |   |\n" +
                    "2  |   |   | X |\n" +
                    "3  |   | O |   |\n" +
                    "   -------------");
        console.log('Rows are numbered from top to bottom. Columns - from left to right.');
    }

}




const gameRunner = new GameRunner();

while (confirm('Would you like to start a new game? ')) {
    gameRunner.run();
}
