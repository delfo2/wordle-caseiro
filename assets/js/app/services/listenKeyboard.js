import { addKey, check, removeKey } from "../update/addKey.js";
const teclado = document.querySelector('[data-teclado=""]');

const isLetter = key => {
    const regEx = new RegExp(/^[a-z]$/g);
    return regEx.test(key);
}
const hasAccent = key => {
    const regEx = new RegExp(/[\u00C0-\u017F]/g);
    return regEx.test(key);
}
export const listenKeyboard = (checkerFn, randomWord) => {
    const isValidy = (e, virtualKeys = false) => {
        if(isLetter(e)) {
            addKey(e);
        }
        if(hasAccent(e)) {
            addKey(e);
        }
        if(e.toLowerCase() === 'backspace' || e.toLowerCase() === 'delete') {
            removeKey();
        }
        if(e.toLowerCase() === 'enter') {
            check(checkerFn, randomWord, teclado);
        }
    }
    window.addEventListener('keydown', e => {
        isValidy(e.key);
    })
    teclado.addEventListener('click', (e) => {
        if(e.target.dataset.btn) {
            console.log(e.target.dataset.btn);
            isValidy(e.target.dataset.btn);
            return;
        }
        isValidy(e.target.textContent.toLowerCase(), true);
    })
};

