function verificar() {
    var numero = Number(document.getElementById("numero").value);
    var esPar = (numero % 2 === 0);
    document.getElementById("resultado").textContent = esPar;
  }
