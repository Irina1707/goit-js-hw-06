function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let colorEl = document.querySelector(".color");

const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", onClickChange);

function onClickChange(event) {
  colorEl.innerHTML = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
}


