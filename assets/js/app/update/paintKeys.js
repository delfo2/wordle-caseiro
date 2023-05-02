const verde = 'rgb(83, 141, 78)';
const amarelo = '#B59F3B';
const cinza = 'rgb(88, 88, 88)';

export const paintKeys = (keys, allUserWords, userWords, randomWord) => {
    let keyDivs = keys.querySelectorAll('button');
    
    let arrCorrectWord = doArray(randomWord.toUpperCase());
    let arrUserWord = doArray(userWords.toUpperCase());
    let arrAllUserWord = doArray(allUserWords.toUpperCase());
    
    keyDivs.forEach(key => {
        if(keyAlreadyHaveAColor(key, verde)) {
            return;
        }

        arrAllUserWord.forEach(letter => {
            if(key.textContent.toUpperCase() === letter) {
                key.style.background = cinza;
            }
        })

        arrCorrectWord.forEach((letter, i) => {
            arrAllUserWord.forEach(userLetter => {
                if(userLetter === letter && letter === key.textContent.toUpperCase()) {
                    key.style.background = amarelo;
                }
            })
            if(letter === arrUserWord[i] && letter === key.textContent.toUpperCase()) {
                key.style.background = verde;
            }
        })

    })
    
}

const removeAcent = (string) => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const doArray = (string) => {
    string = removeAcent(string);
    return string.split('');
}

const keyAlreadyHaveAColor = (key, color) => {
    return getComputedStyle(key).backgroundColor === color;
}
  