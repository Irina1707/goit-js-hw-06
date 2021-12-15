const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredEl = document.querySelector(`#ingredients`);

const makeIngredientsEl = ingredientsEl => {

  return ingredientsEl.map(elem => {
    const liEl = document.createElement(`li`);
    liEl.textContent = elem;
    liEl.classList.add('item');

    return liEl;
  });
  
  };

const elements = makeIngredientsEl(ingredients);
ingredEl.append(...elements);
console.log(ingredEl);

