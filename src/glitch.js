// Glitch Text

const restore_delay = 500;
const change_delay = 1000;
const repeat_delay = 2000;
const percentage = 3;
const targets = document.getElementsByClassName("glitch-generate");

const similarLetterChars = {
  'a': ['@', '6', '8', '9'],
  'b': ['6', '8', '9', '$'],
  'c': ['(', ')', '(', ')', '€'],
  'd': ['$', '7', '0', '8'],
  'e': ['3', '€', '5', '3'],
  'f': ['$', 'φ', '5', '6'],
  'g': ['6', '9', '€', '9'],
  'h': ['#', '4', '8', '7'],
  'i': ['1', '!', '|', 'l'],
  'j': ['7', '!', 'l', 'j'],
  'k': ['#', '7', '8', 'k'],
  'l': ['1', '|', 'i', 'j'],
  'm': ['7', '5', '3', '9'],
  'n': ['7', '5', '3', '9'],
  'o': ['0', '°', 'O', 'o'],
  'p': ['9', 'φ', '6', '8'],
  'q': ['9', 'φ', '6', '8'],
  'r': ['2', 'φ', '6', '8'],
  's': ['$', '5', '6', '7'],
  't': ['7', '+', '2', 't'],
  'u': ['6', '0', '°', 'u'],
  'v': ['7', '5', '3', '9'],
  'w': ['7', '5', '3', '9'],
  'x': ['7', '5', '3', '9'],
  'y': ['3', '5', '6', '9'],
  'z': ['2', '5', '3', '9']
};

function coin_flip() {
    if (Math.floor(Math.random() * percentage) == 0) {
        return true;
    }
    return false;
}

function getRandomSimilarChar(letter) {
    const similarChars = similarLetterChars[letter.toLowerCase()];
    return similarChars[Math.floor(Math.random() * similarChars.length)];
}

function char_to_random(character) {
    if (character.toLowerCase() in similarLetterChars) {
        let newChar = getRandomSimilarChar(character);
        return newChar;
    }

    return character;
}

function glitchText() {
    setInterval(() => {
        setTimeout(() => {
            for (let i = 0; i < targets.length; i++) {
                let cur_target = targets[i];
                let target_text = cur_target.textContent;
                let origin_text = cur_target.textContent;

                let tmp_string = "";

                for (let c = 0; c < target_text.length; c++) {
                    let cur_char = target_text[c];

                    if (coin_flip()) {
                        tmp_string += char_to_random(cur_char);
                    } else {
                        tmp_string += cur_char;
                    }
                }

                targets[i].textContent = tmp_string;

                setTimeout(() => {
                    targets[i].textContent = origin_text;
                }, restore_delay);
            }
        }, change_delay);
    }, repeat_delay);
}

console.log("Glitch initialized correctly!");
glitchText();
