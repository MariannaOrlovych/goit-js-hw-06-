
const refs = {

    inputChange:  document.querySelector("input#font-size-control"),
    textSize: document.querySelector("span#text"),
};


console.log(refs.inputChange);
console.log(refs.textSize);


refs.inputChange.addEventListener('input', onInputChange);

function onInputChange (event){
    refs.textSize.style.fontSize = event.currentTarget.value + "px";
}