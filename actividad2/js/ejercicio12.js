function dibujarFigura() {
    let texto = "";
    let resultado = ""
    for (let i = 1; i <= 5; i++) {
      texto += "* "
      resultado += texto + "<br>"
    }

    document.getElementById("resultado").innerHTML = resultado;
  }
