let counterValue = document.querySelector('#value');

let valueEl = Number(document.querySelector('#value').textContent);

const dekrementBtn = document.querySelector('#counter').firstElementChild;
const incrementBtn = document.querySelector('#counter').lastElementChild;

incrementBtn.addEventListener('click', event => {
    console.log("Добавляем слушателя события на кнопку");
    valueEl += 1;
    counterValue.innerHTML = valueEl;
});
dekrementBtn.addEventListener('click', event => {
    console.log('Удаляем слушателя события c кнопки');
    valueEl -= 1;
    counterValue.innerHTML = valueEl; 
    
});
