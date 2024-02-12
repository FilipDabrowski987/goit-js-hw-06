const inputText = document.querySelector('#validation-input');
const inputLength = Number(inputText.dataset.length);
inputText.addEventListener('blur', () => {
    if (inputText.value.length === inputLength) {  
        inputText.classList.replace('invalid', 'valid');
    } else {
        inputText.classList.add('invalid')
    }
});