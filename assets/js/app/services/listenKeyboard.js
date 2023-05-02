import { addKey, check, removeKey } from "../update/addKey.js";
const teclado = document.querySelector('[data-teclado=""]');

let randomWord = '';

const isLetter = key => {
    const regEx = new RegExp(/^[a-z]$/g);
    return regEx.test(key);
}
const hasAccent = key => {
    const regEx = new RegExp(/[\u00C0-\u017F]/g);
    return regEx.test(key);
}

export const listenKeyboard = (checkerFn) => {
    const windowHandlerEvent = e => {
        isValidy(e.key);
    }
    const tecladoHandlerEvent = (e) => {
        if(e.target.dataset.btn) {
            isValidy(e.target.dataset.btn);
            return;
        }
        isValidy(e.target.textContent.toLowerCase(), true);
    }
    
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
    window.addEventListener('keydown', windowHandlerEvent, true);
    teclado.addEventListener('click', tecladoHandlerEvent, true);
};

export const clearKeyBoard = () => {
    const keyboardAll = teclado.querySelectorAll('button');
    keyboardAll.forEach(key => {
        key.style.backgroundColor = '#818384';
    })
}

export const updateRandomWord = (newWord) => {
    randomWord = newWord;
}