export const randomizer = () => {
    fetch('http://192.168.56.1:8080/words-list.json')
        .then(response => response.json())
        .then(data => {
            const palavra = data.find(item => item.id === 986).palavra;
            console.log(palavra);
        })
        .catch(error => console.error(error));
}