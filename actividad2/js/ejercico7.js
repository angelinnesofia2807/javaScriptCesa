function verificarPrimo() {
    let numero = parseInt(prompt("Ingresa un número entero:"));
    let resultado = document.getElementById("resultado");
    let esprimo = true;

    if (numero <= 1) {
      esprimo = false;
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          esprimo = false;
          break;
        }
      }
    }

    if (esprimo) {
      resultado.textContent = numero + " es un número primo.";
    } else {
      resultado.textContent = numero + " no es un número primo.";
    }
  }