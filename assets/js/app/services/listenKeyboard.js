import { addKey, check, removeKey } from "../update/addKey.js";

const isLetter = key => {
    const regEx = new RegExp(/^[a-z]$/g);
    return regEx.test(key);
}
const hasAccent = key => {
    const regEx = new RegExp(/[\u00C0-\u017F]/g);
    return regEx.test(key);
}
export const listenKeyboard = (checkerFn, randomWord) => {
    window.addEventListener('keydown', e => {
        if(isLetter(e.key)) {
            addKey(e.key);
        }
        if(hasAccent(e.key)) {
            addKey(e.key);
        }
        if(e.key === 'Backspace' || e.key === 'Delete') {
            removeKey();
        }
        if(e.key === 'Enter') {
            check(checkerFn, randomWord);
        }
    })
};

