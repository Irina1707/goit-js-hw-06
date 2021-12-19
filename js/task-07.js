let inputEl = document.querySelector("#font-size-control");
let textEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
    const size = inputEl.value;

    textEl.style.fontSize = size + "px";
};

