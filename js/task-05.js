const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener('input', (event) => {
    if (inputText.value.trim() !== '') {
        outputText.textContent = inputText.value.trim();
    } else {
        outputText.textContent = 'Anonymous';
    }
});