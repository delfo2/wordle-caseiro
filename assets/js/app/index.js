import { checker } from "./services/checker.js";
import { clearKeyBoard, listenKeyboard, updateRandomWord } from "./services/listenKeyboard.js";
import { randomizer } from "./services/randomizer.js";
import { restartGame } from "./update/addKey.js";

const btnReset = document.querySelector('[data-btn="replay"]');
const initListen = listenKeyboard;
let randomWord = '';

const generateNewWord = async () => {
    randomWord = await randomizer();
    console.log(randomWord);
    
    updateRandomWord(randomWord.palavra);

    Toastify({
        text: `Dica: ${randomWord.palavra.slice(randomWord.palavra.lenght, 1).toUpperCase()}`,
        position: "center" ,
        newWindow: true, duration: 10000})
        .showToast();
}

generateNewWord();
initListen(checker);

btnReset.addEventListener('click', () => {
    restartGame();
    clearKeyBoard();
    generateNewWord();
})