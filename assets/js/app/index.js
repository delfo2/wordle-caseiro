import { checker } from "./services/checker.js";
import { listenKeyboard } from "./services/listenKeyboard.js";
import { randomizer } from "./services/randomizer.js";

const mensagem = document.querySelector('[data-texto=""]');
const randomWord = await randomizer();
console.log(randomWord);

mensagem.textContent = `Dica: ${randomWord.palavra.slice(randomWord.palavra.lenght, 1)}`;
listenKeyboard(checker, randomWord.palavra);