
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
}

console.log(refs.body);
console.log(refs.span);
console.log(refs.btnChangeColor);

refs.btnChangeColor.addEventListener('click', onButtonName);


function onButtonName(event) {
  const changeColor = getRandomHexColor();
  refs.span.textContent = changeColor;
  document.body.style.background = changeColor;
}

