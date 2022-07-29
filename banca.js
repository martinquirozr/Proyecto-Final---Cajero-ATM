document.getElementById("welcome").textContent =
  "Bienvenido " + sessionStorage.getItem("nombre");

let saldo = parseFloat(sessionStorage.getItem("saldo"));

let saldopantalla = document.getElementById("montoactual");

saldopantalla.textContent = "Tu saldo es de  $" + saldo;

function depositar() {
  if (document.getElementById("monto").value == 0) {
    saldopantalla.textContent = "Ingresa una cantidad";
    mostrar();
  } else {
    let monto = parseFloat(document.getElementById("monto").value);

    saldonuevo = monto + saldo;
    if (saldonuevo > 2000) {
      alert("no puedes tener mas de 2000 $");
    } else {
      saldo += monto;
      saldopantalla.textContent = "Tu saldo es de  $" + saldonuevo;
      mostrar();
    }
  }
}

function retirar() {
  if (document.getElementById("monto").value == 0) {
    saldopantalla.textContent = "Ingresa una cantidad";
    mostrar();
  } else {
    let monto = parseFloat(document.getElementById("monto").value);
    saldonuevo = saldo - monto;

    if (saldonuevo < 10) {
      alert("no puedes tener menos de 10 $");
    } else {
      saldo -= monto;
      saldopantalla.textContent = "Tu saldo es de  $" + saldonuevo;
      mostrar();
    }
  }
}

function mostrar() {
  document.getElementById("saldoactual").style.display = "block";
  setTimeout(() => {
    document.getElementById("saldoactual").style.display = "none";
  }, 2700);
}
