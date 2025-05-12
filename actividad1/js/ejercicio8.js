function calcular() {
    var personas = Number(document.getElementById("personas").value);
    var papa = personas * 200;
    var kilosPapa = papa / 1000;
    var huevos = kilosPapa * 5;
    var cebolla = kilosPapa * 300;
    document.getElementById("resultado").textContent =
      "Papa: " + papa + " g\\n" +
      "Huevos: " + Math.ceil(huevos) + "\\n" +
      "Cebolla: " + cebolla + " g";
  }
