/*function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");

const numberEl = document.querySelector("input");

const createBtn = document.querySelector("button[data-create]");
createBtn.addEventListener("click", createBoxes);

const destroyBtn = document.querySelector("button[data-destroy]");
destroyBtn.addEventListener("click", destroyBoxes);

const boxEl = document.querySelector("boxes");


function createBoxes(amount) {
  let fistBoxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let nextBoxSize = fistBoxSize + i * 10;
    let divEl = document.createElement("div");
    divEl.style.cssText = `width: ${nextBoxSize}, 
    height = ${nextBoxSize};
    backround-color = ${getRandomHexColor()}`
  }
  
}
console.log(divEl)
function destroyBoxes() {

}*/