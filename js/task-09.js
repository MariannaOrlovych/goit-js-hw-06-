
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  bodyEl: document.querySelector('body'),
  backgroundColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
}

console.log(refs.bodyEl);
console.log(refs.backgroundColor);
console.log(refs.btnChangeColor);

refs.btnChangeColor.addEventListener('click', onButtonName);
const changeColor = getRandomHexColor;

function onButtonName(event) {
  refs.backgroundColor.textContent = changeColor();
  document.body.style.backgroundColor =changeColor();
}

