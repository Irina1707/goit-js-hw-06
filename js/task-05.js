let inputEl = document.querySelector('#name-input');
inputEl.addEventListener("input", onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(event) {
    inputEl = event.currentTarget.value;
    
    console.log(inputEl);
    if (inputEl !== " ") { 
        return outputEl.innerText = inputEl;
    } else {
       return outputEl.innerText = "Anonymous";
    }
    //inputEl === " " ? (outputEl.innerText = `${Anonymous}`) : (outputEl.innerText = inputEl);
}
console.log(outputEl);

