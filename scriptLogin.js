const inputContraseña = document.getElementById("contraseña");
const inputs = document.querySelectorAll("#formulario input");
const formulario = document.getElementById("formulario");
const password = document.querySelector(".password");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const user = document.getElementById("user");
const ojo1 = document.getElementById("ojo1");

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos ={
    nombre: false,
    contraseña: false,
}

const validarFormulario = (e) => {
    switch (e.target.name)
     {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                error1.style.color = "transparent";
                console.log("Correcto")
            } else {
                console.log("Incorrecto")
                error1.style.color ="#354F52";
            };

            if(expresiones.nombre.test(e.target.value)){
                user.classList.remove("fa-user");
                user.classList.add("fa-user-check");

            } else {
                user.classList.remove("fa-user")
                user.classList.add("fa-user-xmark")

                user.classList.remove("fa-user-check")
                user.classList.add("fa-user-xmark")

            }
            break;

        case "contraseña":
            if(expresiones.password.test(e.target.value)){
                error2.style.color = "transparent";
            } else {
                error2.style.color = "#354F52";
            }

        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
})

function cambiarContraseña(iconoDeContraseña, inputDeContraseña) {
    iconoDeContraseña.addEventListener("click",() => {
    if (inputDeContraseña.type === "password") {
        inputDeContraseña.type = "text"
        

        iconoDeContraseña.classList.remove("fa-eye-slash")
        iconoDeContraseña.classList.add("fa-eye")

    } else {
        inputDeContraseña.type = "password"
        iconoDeContraseña.classList.remove("fa-eye")
        iconoDeContraseña.classList.add("fa-eye-slash")
    }        
    })
};


cambiarContraseña(ojo1, password);
const barraDesplazamiento = document.querySelector(".barra")
const contenedorPrincipal = document.querySelector(".formulario")
let posicionContenido = "arriba";

function moverContenidoConBarra(){
    console.log(("clicj"))
    if (posicionContenido === "arriba") {
        contenedorPrincipal.style.top = "92vh";
        posicionContenido = "abajo";
    } else {
        contenedorPrincipal.style.top = "15vh";
        posicionContenido = "arriba";
    }
};