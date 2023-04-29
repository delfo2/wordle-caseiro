const tabuas = document.querySelectorAll('[data-tabua]');
let index = 0;
let userWord = '';
let stage = 1;
let allowIndex = 5;
let paintIndexStart = 0;

const updateStage = () => {
    allowIndex += 5;
    stage += 1;
    paintIndexStart += 5;
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
    let arr = randomWord.split('');

    for(let i = paintIndexStart; i < index; i++) {
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

    if(canUserWrite) {
        userWord += key;
        tabuas[index].textContent = key.toUpperCase();        
        updateIndex();
    }
    if(stage === 7) {
        Toastify({text: `Você chegou ao fim do jogo. A palavra era: ${randomWord}`,
            position: "center" , newWindow: true, duration: 5000})
            .showToast();
        return;
    }
}

export const removeKey = () => {
    const canRemove = stage < 7 && index - 1 < allowIndex && index > allowIndex - 5;
    if(canRemove) {
        subractIndex();
        tabuas[index].textContent = '';
        userWord = userWord.slice(0, userWord.length - 1);
    }
}

export const check = (checkerFn, randomWord) => {
    const canCheck = index % 5 === 0 && stage < 7 && index > 0 && userWord.length > 0;
    if(canCheck) {
        if(checkerFn(userWord, randomWord)) {
            Toastify({
                text: "você acertou a palavra. Fim de Jogo.",
                position: "center" , newWindow: true, duration: 5000})
                .showToast();
            userWord = '';
            stage = 7;
        } else {
            userWord = '';
            Toastify({
                text: "você errou a palavra.",
                position: "center" , newWindow: true, duration: 5000})
                .showToast();    
        }
        paintWords(randomWord);
        updateStage();
    }
    if(stage >= 7) {
        Toastify({text: `A palavra era: ${randomWord}`,
        position: "center" , newWindow: true, duration: 1000})
        .showToast();
    }
}