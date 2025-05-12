function calcularPromedio() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    var n3 = Number(document.getElementById("num3").value);
    var promedio = (n1 + n2 + n3) / 3;
    document.getElementById("resultado").textContent = "Promedio: " + promedio;
}
