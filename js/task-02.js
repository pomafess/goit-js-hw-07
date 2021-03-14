const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsList = document.querySelector('#ingredients');

// const makeIngredientsList = ingredients => {
//     return ingredients.map(ingridient => {
//         const item = document.createElement('li');
//         item.textContent = ingridient;
//         item.style.listStyle = 'none';
//         return item
//     }

//     )
// }
// const elemIngredients = makeIngredientsList(ingredients)
// ingredientsList.append(...elemIngredients)
// console.log(ingredientsList)


const ingredientsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingridient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingridient;
    itemEl.style.listStyle = 'none';
    return itemEl;
});
ingredientsList.append(...elements);
console.log(ingredientsList);