const categoriesEl = document.querySelector('#categories');
const itemEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

const ul = document.querySelectorAll(`#categories>li`);

ul.forEach((elem) => {
    console.log(`Category: ${elem.firstElementChild.textContent}`)
    console.log(`Elements: ${elem.lastElementChild.children.length}`)
});

