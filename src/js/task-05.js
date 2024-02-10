const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener('input', (event) => {
    if (inputText.value !== '') {
        outputText.textContent = inputText.value;
    } else {
        outputText.textContent = 'Anonymous';
    }
});