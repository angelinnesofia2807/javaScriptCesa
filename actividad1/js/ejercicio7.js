function separar() {
    var numero = Number(document.getElementById("numero").value);
    var decenas = Math.floor(numero / 10);
    var unidades = numero % 10;
    document.getElementById("resultado").textContent = 
      "Decenas: " + decenas + ", Unidades: " + unidades;
  }
