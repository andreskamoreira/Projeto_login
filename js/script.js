//Seleção de elementos
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const freeBtn = document.querySelector("#free");
const sendBtn = document.querySelector("#send");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkForm();
    
});

function checkname() {
    const nameInputValue = nameInput.value;

    if(nameInputValue === "") {
        //mostrar o aviso de error
        errorInput(nameInput, "Campo Obrigatório!")
    } else {
        const formItem = nameInput.parentElement;
        formItem.className = "content"
    }
}

function checkLastName() {
    const lastNameInputValue = lastNameInput.value;

    if(lastNameInputValue === "") {
        //mostrar o aviso de error
        errorInput(lastNameInput, "Campo Obrigatório!")
    } else {
        const formItem = lastNameInput.parentElement;
        formItem.className = "content"
    }
}

function checkemail() {
    const emailInputValue = emailInput.value;

    if(emailInputValue === "") {
        //mostrar o aviso de error
        errorInput(emailInput, "O E-mail é Obrigatório!")
    } else {
        const formItem = emailInput.parentElement;
        formItem.className = "content"
    }
}

function checkpassword() {
    const passwordInputValue = passwordInput.value;

    if(passwordInputValue === "") {
        //mostrar o aviso de error
        errorInput(passwordInput, "A senha é Obrigatória!")
    } else if (passwordInputValue.length < 8) {
        errorInput(passwordInput, "A senha precisa ter no mínimo 8 caracteres.")
    } else {
        const formItem = passwordInput.parentElement;
        formItem.className = "content"
    }
};

function checkForm() {
  
    checkname();
    checkLastName();
    checkemail();
    checkpassword();

    const formItems = form.querySelectorAll(".content");

    const isValid = [...formItems].every((item) => {
        return item.className === "content"
    });

    if(isValid){
        alert("Cadastrado com sucesso!")
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
   
    textMessage.innerText = message;
    formItem.className = "content error"
};