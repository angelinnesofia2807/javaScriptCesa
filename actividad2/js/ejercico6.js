function mostrarMultiplos() {
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let resultado = document.getElementById("resultado");

    let texto = "";

    for (let i = num1; i <= num2; i++) {
      if (i % 3 === 0) {
        texto += i + " ";
      }
    }

    resultado.textContent = "Múltiplos de 3: " + texto;
  }