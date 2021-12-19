let inputEl = document.querySelector("#validation-input");
let inputLength = inputEl.dataset.length;

inputEl.addEventListener("blur", onInputBlur);
const input = document.querySelector("input");
function onInputBlur(event) {
    const text = event.target.value;

    if (text.length === inputLength) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
};
console.log(inputEl);