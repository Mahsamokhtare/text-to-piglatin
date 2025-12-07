const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// const userInput = process.argv[2]?.toLowerCase();
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("**********English To Piglatin Translator*********");

function translator() {
  rl.question("Please enter your phrase: ", (input) => {
    const userInput = input.toLocaleLowerCase();
    let translatedPhrase = "";
    const array = [...userInput];

    if (
      !array.length == 0 &&
      consonants.includes(array[0]) &&
      vowels.includes(array[1])
    ) {
      array.push(array[0]);
      array.push("ay");
      translatedPhrase = array.slice(1).join("");
    } else if (
      !array.length == 0 &&
      consonants.includes(array[0]) &&
      consonants.includes(array[1])
    ) {
      array.push(array[0]);
      array.push(array[1]);
      array.push("ay");
      translatedPhrase = array.slice(0, 2).join("");
    } else if (!array.length == 0 && vowels.includes(array[0])) {
      array.push("way");
      translatedPhrase = array.join("");
    } else {
      translatedPhrase = userInput;
    }
    console.log(`Result: ${translatedPhrase}`);

    //If user want to play again

    rl.question(
      "Do you want to to translate another phrase? (yes/no)",
      (answer) => {
        if (
          (!answer.toLocaleLowerCase() == "" &&
            answer.toLocaleLowerCase() == "yes") ||
          answer.toLocaleLowerCase() == "y"
        ) {
          translator();
        } else {
          console.log("Bye :))");
          rl.close();
        }
      }
    );
  });
}
translator();
