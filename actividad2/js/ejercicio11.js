function calcular() {
    let a = parseInt(prompt("Primer número:"));
    let b = parseInt(prompt("Segundo número:"));
    let pares = 0;
    let sumaimpares = 0;
    let conteoimpares = 0;
    let texto = "";

    for (let i = a; i <= b; i++) {
      if (i % 2 === 0) {
        pares += i;
      } else {
        sumaimpares += i;
        conteoimpares++;
      }
    }

    let promedio = sumaimpares / conteoimpares;

    texto = "Suma de pares: " + pares + "<br>Promedio de impares: " + promedio;
    document.getElementById("resultado").innerHTML = texto;
  }