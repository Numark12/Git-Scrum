document.getElementById("submit").addEventListener("click", validar);

function mailValido(email) {
  var re = /\S+@\S+/;
  return re.test(email);
}

function validar(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let clave = document.getElementById("clave").value;

  let noVacio = document.getElementById("noVacio");
  let conArroba = document.getElementById("conArroba");
  let ingresoOK = document.getElementById("ingresoOK");

  if (mailValido(email) === false) {
    conArroba.innerHTML = "Debes colocar un @ entre dos palabras";
    ingresoOK.innerHTML = "";
  } else {
    conArroba.innerHTML = "";
  }

  if (clave.length === 0) {
    noVacio.innerHTML = "Este campo no debe estar vacío";
    ingresoOK.innerHTML = "";
  } else {
    noVacio.innerHTML = "";
  }

  if (clave.length != 0 && mailValido(email) === true) {
    ingresoOK.innerHTML = "¡ingreso exitoso!";
  }
}

