function repetirFrase() {
    let veces = parseInt(prompt("Cuántas veces quieres repetir la frase (1 a 20)"));
    let frase = prompt("Escribe la frase:");

    let texto = "";

    if (isNaN(veces) || veces < 1 || veces > 20) {
      texto = " número debe estar entre 1 y 20.";
    } else {
      for (let i = 1; i <= veces; i++) {
        texto += i + ". " + frase + "<br>";
      }
    }

    document.getElementById("resultado").innerHTML = texto;
  }