const tabuas = document.querySelectorAll('[data-tabua]');
const mensagem = document.querySelector('[data-texto=""]');
let index = 0;
let userWord = '';
let stage = 0;

const indexIsSmallerThanLenght = index < tabuas.length - 1;
const updateStage = () => {
    stage += 1;
    mensagem.textContent = `${mensagem.textContent} / stage atual: ${stage}`;
}
const checkStage = () => {
    let allow = stage * 5;
    if(stage < 6) {
        if(index <= allow) {
            index = allow;
            return false;
        }
    }
    return true;
}
const updateIndex = () => {
    index < 29 ? index +=1 : index = 0;
}
const subractIndex = () => {
    if(index > 0) {
        index -= 1;
    }
}

export const addKey = (key, checkerFn, randomWord) => {
    if(stage < 6) {
        userWord += key;
        checkStage();
        
        if(indexIsSmallerThanLenght) {
            tabuas[index].textContent = key.toUpperCase();
        }
        
        if((index + 1) % 5 === 0) {
            if(checkerFn(userWord, randomWord)) {
                mensagem.textContent = 'você acertou a palavra.';
                userWord = '';
            } else {
                mensagem.textContent = `você errou a palavra.`;
                userWord = '';
            }
            updateStage();
        }
        
        updateIndex();
    } else {mensagem.textContent = 'limite atingido.';}
}

export const removeKey = () => {
    if(stage < 6 && checkStage()) {
        subractIndex();
        tabuas[index].textContent = '';
        userWord = userWord.slice(0, userWord.length - 1);
    } else {mensagem.textContent = 'exclusão não permitida.';}
}