
const counter =  {
    counterValue:0,
    increment(){
        console.log('increment -> this' , this);
        this.counterValue += 1;
    },
    decrement(){
        console.log('decrement -> this', this);
        this.counterValue -= 1;
    }
}

const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;
const counterValueEl = document.querySelector("#value");


decrementBtn.addEventListener('click', function(){
   counter.decrement();
   value.textContent = counter.counterValue;
})

incrementBtn.addEventListener('click', function(){
    counter.increment();
    value.textContent = counter.counterValue;
 })