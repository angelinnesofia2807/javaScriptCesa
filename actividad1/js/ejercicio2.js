function calcular() {
    var lado = Number(document.getElementById("lado").value);
    var area = lado * lado;
    var perimetro = lado * 4;
    document.getElementById("resultado").textContent =
      "Área: " + area + " unidades²\n" +
      "Perímetro: " + perimetro + " unidades";
  }
