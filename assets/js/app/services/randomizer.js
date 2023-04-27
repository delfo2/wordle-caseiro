const isGreaterThan999 = ID => ID > 999 ? 1 : ID;

const fetchAPI = async (ID) => {
    try {
        const res = await fetch('assets/js/json/words-list.json')
            .then(response => response.json())
            .then(data => {
                let palavra = undefined;
                for(let i = 0; palavra == undefined; i++) {
                    ID = isGreaterThan999(ID);
                    palavra = data.palavras.find(item => item.id === ID + i);
                }
                return palavra;
            })
        return res;
    } catch (error) {
        throw new Error('Não foi possível conectar a API de palavras.');
    }
}

const randomNumber = () => {
    return Math.floor(Math.random() * 1000);
}

export const randomizer = async () => {
    const randomID = randomNumber();
    const randomWord = await fetchAPI(randomID);
    return randomWord;
}