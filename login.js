// Variables

const formulario = document.getElementById("formulario");

// Clientes Objetos
let cliente1 = {
  nombre: "Martin Quiroz",
  usuario: "quirozm",
  password: "quiroz1234",
  saldo: "400",
};

let cliente2 = {
  nombre: "Alejandro Perez",
  usuario: "pereza",
  password: "perez1234",
  saldo: "300",
};
let cliente3 = {
  nombre: "Diana Mendez",
  usuario: "mendezd",
  password: "mendez1234",
  saldo: "110",
};

// Array de Obejtos(clientes)
let clientes = [cliente1, cliente2, cliente3];

// Función para validar el número de cliente

const validarcliente = (uingresado, pingresado) => {
  let numusuario = "";
  if (uingresado === clientes[0].usuario) {
    numusuario = 0;
  } else if (uingresado === clientes[1].usuario) {
    numusuario = 1;
  } else if (uingresado === clientes[2].usuario) {
    numusuario = 2;
  } else {
    document.getElementById("errorlogint").innerHTML = "Usuario Inválido";
  }

  //Validar datos de inicio de sesion

  let user = clientes[numusuario].usuario;
  let psw = clientes[numusuario].password;

  if (uingresado === "" || pingresado === "") {
    document.getElementById("errorlogint").innerHTML =
      "Ingresa tus datos por favor";
    // Login Correcto
  } else if (user === uingresado && pingresado === psw) {
    // console.log("Bienvenido " + clientes[numusuario].nombre);

    sessionStorage.setItem("usuario", clientes[numusuario].usuario);
    sessionStorage.setItem("nombre", clientes[numusuario].nombre);
    sessionStorage.setItem("saldo", clientes[numusuario].saldo);

    window.location.href = "banca.html";

    // Borrar datos una vez que se inicio sesión correctamente
    document.getElementById("usuario").value = "";
    document.getElementById("password").value = "";
  } else if (user !== uingresado) {
    document.getElementById("errorlogint").innerHTML = "Usuario Incorreto";
    document.getElementById("usuario").value = "";
  } else if (password !== pingresado) {
    document.getElementById("errorlogint").innerHTML = "Contraseña Incorrecta";
    document.getElementById("password").value = "";
  } else {
    document.getElementById("errorlogint").innerHTML = "Completa los Datos";
  }
};

// Se agrega el evento cuado se de click en el boton

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;

  validarcliente(usuario, password);
});
