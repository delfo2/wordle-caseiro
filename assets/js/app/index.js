import { checker } from "./services/checker.js";
import { listenKeyboard } from "./services/listenKeyboard.js";
import { randomizer } from "./services/randomizer.js";

const randomWord = await randomizer();
console.log(randomWord);

Toastify({
    text: `Dica: ${randomWord.palavra.slice(randomWord.palavra.lenght, 1).toUpperCase()}`,
    position: "center" ,
    newWindow: true, duration: 10000})
    .showToast();

listenKeyboard(checker, randomWord.palavra);