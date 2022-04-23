const d = document;

 const form = d.getElementById('form'),
 usuario = d.getElementById('nombre'),
 email = d.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
     const usuarioValue = usuario.value;
    const emailValue =  email.value;

    if(usuarioValue === '') {
        setErrorFor(usuario, "Por favor introduzca un nombre") 
    } else {
        setSucces(usuario)
    }
    if(emailValue === '') {
        setErrorFor(email, "Por favor, ingrese su email");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No es un mail valido')
    } else {
        setSucces(email)
    }
};
function setErrorFor(input, message) {
    const formControl = input.parentElement ;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
};
function setSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
};
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}