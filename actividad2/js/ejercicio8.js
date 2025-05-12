function mostrarTablas() {
    let texto = "";

    for (let t =3; t <= 9; t++) {
      texto += "Tabla del " + t + "<br>";
      for (let i = 1; i <= 10; i++) {
        texto += t + " x " + i + " = " + (t * i) + "<br>";
      }
      texto += "<br>";
    }

    document.getElementById("resultado").innerHTML = texto;
  }