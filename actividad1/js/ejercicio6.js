function convertir() {
    var horas = Number(document.getElementById("horas").value);
    var minutos = Number(document.getElementById("minutos").value);
    var segundos = (horas * 60 + minutos) * 60;
    document.getElementById("resultado").textContent = "Total en segundos: " + segundos;
  }
