function calcular() {
    let num = prompt("Escribe un número:");
    let fact = 1;

    for (let i = 1; i <= num; i++) {
      fact *= i;
    }

    document.getElementById("resultado").textContent = "El factorial de " + num + " es: " + fact;
  }