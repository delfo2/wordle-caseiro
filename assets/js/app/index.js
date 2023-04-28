import { listenKeyboard } from "./services/listenKeyboard.js";
import { randomizer } from "./services/randomizer.js";

const randomWord = await randomizer();
console.log(randomWord);

listenKeyboard();