const formName = document.querySelector(".login-form");

formName.addEventListener("submit", onFormSub);

function onFormSub(e) {
    e.preventDefault();

    const formEl = e.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    if(email.length === 0|| password.length === 0){
    alert('всі поля повинні бути заповнені');
    return;
    }
    
    const formData = {
    email,
    password,
    };

    console.log(formData);
    formName.reset();
};




