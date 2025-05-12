function intercambiar() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var temp = a;
    a = b;
    b = temp;
    document.getElementById("resultado").textContent = 
      "Ahora A = " + a + ", B = " + b;
  }
