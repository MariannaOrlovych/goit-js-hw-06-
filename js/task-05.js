
// об'єкт ссилок на елементи

const refs = {
 input:  document.querySelector("#name-input"),
 userName: document.querySelector("#name-output"),
};


refs.input.addEventListener('input', onInputChange);



function onInputChange(event){
   
   console.log(event.currentTarget.value);
    refs.userName.textContent = event.currentTarget.value;

    if(!event.currentTarget.value){
        return refs.userName.textContent = "Anonymous";
    }
}
   




