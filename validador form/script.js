const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener('submit',(event) => {
    event.preventDefault();
  
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === '') {
        setErrorFor(username, 'O nome de usuario é obrigatorio!');
    }else {
        setSuccessFor(username);
    }

    if(emailValue === "") {
        setErrorFor(email, "O email é obrigatorio");
    }else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
    }else {
        setSuccessFor(email);
    }

    if(passwordValue ===  "") {
        setErrorFor(password, "A senha é obrigatoria");
    } else if(passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no minimo 7 caracteres");
    }else {
        setSuccessFor(password);
    }

    if(passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmaçao de senha é obrigatoria");
    }else if(passwordConfirmationValue  !== passwordValue) {
        setErrorFor(passwordConfirmation, "As senhas nao conferem.");
    }else {
        setSuccessFor(passwordConfirmation);
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  };

function setSuccessFor (input) {
    const formControl = input.parentElement;

    //add classe de success
    formControl.className = "form-control success";
};


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
};