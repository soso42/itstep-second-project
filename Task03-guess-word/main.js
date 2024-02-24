/**
 * გამოიცანი სიტყვა (თამაში)
 * განსაზღვრეთ მასივში რამდენიმე შემთხვევითი სიტყვები.
 * ამ მასივიდან აარჩიეთ შემთხვევითი სიტყვა, რომელიც იქნება გამოსაცნობი.
 * მომხარებელს გამოვუტანოთ შეტყობინება, თუ რამდენი სიმბოლო არის ასაკრეფი (მაგ: 4 სიმბოლო უნდა გამოვიდეს ესე -> _ _ _ _).
 * თითოეულ სიმბოლოს შემოტანაზე, უნდა გამოვუტანოთ შეტყობინება, არის თუ არა სიტყვაში ეს კონკრეტული ასო, თუ არის
 * გამოვაჩინოთ სადაც არის დამთხვევა, ხოლო თუ არ არის გამოვიტანოთ მცდელობების რაოდენობა.
 * თამაში გრძელდება მანამ სანამ არ ამოეწურება მცდელობების რაოდენობა (შეგიძლიათ კოდში განსაზღვროთ ან შემოატანინოთ) ან უსასრულოდ.
 */


class Letter {
    value;
    hidden = true;

    constructor(letter) {
        this.value = letter;
    }

    getValue() {
        return this.value;
    }

    isHidden() {
        return this.hidden;
    }

    setHidden(val) {
        this.hidden = val;
    }

    toString() {
        return this.hidden ? '_' : this.value;
    }
}


class Word {

    letters = [];

    constructor(str) {
        for (let i = 0; i < str.length; i++) {
            this.letters.push(new Letter(str[i]));
        }
    }

    containsLetter(ch) {
        for (let letter of this.letters) {
            if (letter.getValue() === ch) {
                return true;
            }
        }
        return false;
    }

    isFullyRevealed() {
        let revealed = true;
        for (let letter of this.letters) {
            if (letter.isHidden()) {
                revealed = false;
            }
        }
        return revealed;
    }

    showLetters(ch) {
        for (let letter of this.letters) {
            if (letter.getValue() === ch) {
                letter.setHidden(false);
            }
        }
    }

    toString() {
        let result = '';
        for (let letter of this.letters) {
            result += letter.toString();
        }
        return result;
    }
}


class Scanner {

    getNumberOfAttempts() {
        while (true) {
            let input = prompt('Please enter desired number of attempts. (Cancel to choose default 10)');
            if (input === null) {
                return 10;
            } else if (isNaN(+input) || +input <= 0) {
                alert('You must enter a natural number, greater then 0!');
                continue;
            }
            return +input;
        }
    }

    getCharacter() {
        while (true) {
            let input = prompt('Guess a character: (You must enter ONLY alphabetical characters)');
            if (input === null) {
                return null;
            } else if (input.length === 0) {
                alert('This field can NOT be empty!');
                continue;
            } else if (input.length > 1) {
                alert('You must enter only ONE character!');
                continue;
            } else if (input.toUpperCase() === input.toLowerCase()) {
                alert('You must enter ONLY alphabetical characters!');
                continue;
            }
            return input;
        }
    }

}


class Utils {

    words = ['lion', 'cat', 'house', 'computer', 'table', 'sandwich', 'holiday', 'sleep', 'dream', 'programming'];

    getRandomWord() {
       let randomIndex = Math.floor(Math.random() * 10);
       return new Word(this.words[randomIndex]);
    }

}


class GameRunner {

    scanner;
    utils;
    word;
    numOfAttempts;

    constructor() {
        this.scanner = new Scanner();
        this.utils = new Utils();
        this.word = this.utils.getRandomWord();
    }

    run() {

        this.numOfAttempts = this.scanner.getNumberOfAttempts();

        while (this.numOfAttempts > 0) {

            console.log('Word: ' + this.word.toString());

            let letter = this.scanner.getCharacter();
            if (letter === null) {
                return;
            }
            if (this.word.containsLetter(letter)) {
                this.word.showLetters(letter);
                if (this.word.isFullyRevealed()) {
                    console.log(`!!! ${this.word.toString()} !!!`);
                    console.log('You have fully guessed the word and you won! ');
                    return;
                }
            } else {
                console.log(`You have ${--this.numOfAttempts} attempts left`);
            }

        }

        if (!this.word.isFullyRevealed() && this.numOfAttempts <= 0) {
            console.log('You couldn\'t guess the word!. You\'ve LOST...');
        }
    }

}


new GameRunner().run();
