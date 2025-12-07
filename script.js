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
const array = [];
console.log("**********English To Piglatin Translator*********");

rl.question("Please enter your phrase: ", (input) => {
  const userInput = input.toLocaleLowerCase();
  for (const char of userInput) {
    array.push(char);
  }
  let translatedPhrase = "";
  if (
    !array.length == 0 &&
    consonants.includes(array[0]) &&
    vowels.includes(array[1])
  ) {
    array.push(array[0]);
    array.push("ay");
    translatedPhrase = array.slice(1).join("");
    console.log(`Result: ${translatedPhrase}`);
  } else if (
    !array.length == 0 &&
    consonants.includes(array[0]) &&
    consonants.includes(array[1])
  ) {
    array.push(array[0]);
    array.push(array[1]);
    array.push("ay");
    translatedPhrase = array.slice(0, 2).join("");
    console.log(`Result: ${translatedPhrase}`);
  } else if (!array.length == 0 && vowels.includes(array[0])) {
    array.push("way");
    translatedPhrase = array.join("");
    console.log(`Result: ${translatedPhrase}`);
  } else {
    console.log(`Result: ${userInput}`);
  }
  rl.close();
});
