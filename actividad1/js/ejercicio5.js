function calcular() {
    var km = Number(document.getElementById("km").value);
    var litros = Number(document.getElementById("litros").value);
    var consumo = litros / km;
    document.getElementById("resultado").textContent = "Consumo: " + consumo.toFixed(2) + " litros/km";
  }
