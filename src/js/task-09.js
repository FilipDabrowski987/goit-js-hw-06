function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  let randomColor = getRandomHexColor();
  document.querySelector('.color').textContent = randomColor;
  document.body.style.backgroundColor = randomColor
}

const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', changeColor);