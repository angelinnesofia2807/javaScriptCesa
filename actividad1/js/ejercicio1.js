function calcularTotal() {
  var precio = Number(document.getElementById("precio").value);
  var iva = Number(document.getElementById("iva").value);
  var valorIVA = (precio * iva) / 100;
  console.log(precio,iva)
  var total = precio + valorIVA;
  document.getElementById("resultado").textContent =
   "Total a pagar: " + total.toFixed(2) + " €";
}
