import { addKey, removeKey } from "../update/addKey.js";

const isLetter = key => {
    const regEx = new RegExp(/^[a-z]$/g);
    return regEx.test(key);
}
const hasAccent = key => {
    const regEx = new RegExp(/[\u00C0-\u017F]/g);
    return regEx.test(key);
}
export const listenKeyboard = () => {
    window.addEventListener('keydown', e => {
        if(isLetter(e.key)) {
            addKey(e.key);
            return;
        }
        if(hasAccent(e.key)) {
            addKey(e.key);
            return;
        }
        if(e.key === 'Backspace') {
            removeKey();
            return;
        }
        console.log(`${e.key}: não entrou`);
    })
};

