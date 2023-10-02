//Seleção de elementos
const form = document.querySelector("#form");
const nameInput = document.querySelector("name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("email");
const passwordInput = document.querySelector("#password");
const freeBtn = document.querySelector("#free");
const sendBtn = document.querySelector("#send");

function validate (){

    const nameInputValue = nameInput.value

};


sendBtn.addEventListener('click', (e) => {
    e.preventDefault()

    validate();
})