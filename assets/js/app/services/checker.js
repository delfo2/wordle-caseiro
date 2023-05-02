export const checker = (userWord, correctWord) => {
    userWord = userWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    correctWord = correctWord.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return userWord === correctWord;
}