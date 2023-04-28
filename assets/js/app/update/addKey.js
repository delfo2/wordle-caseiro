const tabuas = document.querySelectorAll('[data-tabua]');
let index = 0;

const indexIsSmallerThanLenght = index < tabuas.length - 1;
const updateIndex = () => {
    index < 29 ? index +=1 : index = 0;
}
const subractIndex = () => {
    if(index > 0) {
        index -= 1;
    }
}

export const addKey = key => {
    if(indexIsSmallerThanLenght) {
        tabuas[index].textContent = key.toUpperCase();
    }
    updateIndex();
}

export const removeKey = () => {
    subractIndex();
    tabuas[index].textContent = '';
}