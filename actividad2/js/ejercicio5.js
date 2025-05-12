function calcularImpuesto() {
    let salario = parseFloat(prompt("Ingresa tu salario mensual:"));
    let resultado = document.getElementById("resultado");

    if (isNaN(salario)) {
      resultado.textContent = "Por favor, ingresa un salario válido.";
      return;
    }

    let impuesto = 0;

    if (salario <= 2000000) {
      impuesto = 0;
    } else if (salario <= 4000000) {
      impuesto = salario * 0.10;
    } else {
      impuesto = salario * 0.20;
    }

    resultado.textContent = "El impuesto que debes pagar es: $" + impuesto.toFixed(0);
  }
