const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
console.log(ulEl);

const res = ingredients.map(option => {
  const itemLiElements = document.createElement('li');
  itemLiElements.textContent = option;
  itemLiElements.classList.add('item');

  return itemLiElements;
});

console.log(res);
ulEl.append(...res);
