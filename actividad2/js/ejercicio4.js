function calcularPrecio() {
    let edad = parseInt(prompt("¿Cuál es tu edad?"));
    let resultado = document.getElementById("resultado");

    if (isNaN(edad)) {
      resultado.textContent = "Por favor, ingresa una edad válida.";
    } else if (edad < 5) {
      resultado.textContent = "Entrada gratis.";
    } else if (edad <= 18) {
      resultado.textContent = "El precio de entrada es $5.000.";
    } else {
      resultado.textContent = "El precio de entrada es $10.000.";
    }
  }