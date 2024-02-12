const fontSizeControl = document.querySelector('#font-size-control');
const changedText = document.querySelector('#text');
changedText.style.fontSize = `${fontSizeControl.value}px`;
fontSizeControl.addEventListener('input', () => {
    changedText.style.fontSize = `${fontSizeControl.value}px`
});