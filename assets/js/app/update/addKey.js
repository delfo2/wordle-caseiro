const tabuas = document.querySelectorAll('[data-tabua]');
const mensagem = document.querySelector('[data-texto=""]');
let index = 0;
let userWord = '';
let stage = 1;
let allowIndex = 5;
let paintIndexStart = 0;

const indexIsSmallerThanLenght = index < tabuas.length - 1;

const updateStage = () => {
    allowIndex += 5;
    stage += 1;
    paintIndexStart += 5;
    mensagem.textContent = `${mensagem.textContent} / stage atual: ${stage}`;
}

const updateIndex = () => {
    index +=1;
}
const subractIndex = () => {
    if(index > 0) {
        index -= 1;
    }
}

const paintWords = (randomWord) => {
    let letterPosition = 0;
    for(let i = paintIndexStart; i < index; i++) {
        let arr = randomWord.split('');
        let trWord = tabuas[i].textContent;
        let trCss = tabuas[i].classList;

        arr.forEach(letter => {
            if(trWord === letter.toUpperCase()) {
                trCss.add('chute__valido');
                return;
            }
        });
        if(trWord === randomWord[letterPosition].toUpperCase()) {
            trCss.add('chute__correto');
        } else {
            trCss.add('chute__invalido');
        }
        letterPosition++;
    }
}

export const addKey = (key) => {
    let canUserWrite = stage < 7 && index < allowIndex;
    console.log(allowIndex);
    if(canUserWrite) {
        userWord += key;
        
        if(indexIsSmallerThanLenght) {
            tabuas[index].textContent = key.toUpperCase();
        }
        
        updateIndex();
    } else {
        if(stage === 7) {
            mensagem.textContent = 'Você chegou ao fim do jogo.';
            return;
        }
        mensagem.textContent = 'limite atingido.';
    }
}

export const removeKey = () => {
    const canRemove = stage < 7 && index - 1 < allowIndex && index > allowIndex - 5;
    if(canRemove) {
        subractIndex();
        tabuas[index].textContent = '';
        userWord = userWord.slice(0, userWord.length - 1);
    } else {mensagem.textContent = 'exclusão não permitida.';}
}

export const check = (checkerFn, randomWord) => {
    const canCheck = index % 5 === 0 && stage < 7 && index > 0 && userWord.length > 0;
    if(canCheck) {
        if(checkerFn(userWord, randomWord)) {
            mensagem.textContent = 'você acertou a palavra. Fim de Jogo.';
            userWord = '';
            stage = 7;
        } else {
            mensagem.textContent = `você errou a palavra.`;
            userWord = '';
        }
        paintWords(randomWord);
        updateStage();
    }
}