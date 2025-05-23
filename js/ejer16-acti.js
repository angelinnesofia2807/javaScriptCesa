let cuentas = [];
let siguienteNumero = 1;


function crearCuenta() {
  let añoActual = new Date().getFullYear();
  let codigoCuenta = añoActual + "-" + siguienteNumero;
  siguienteNumero++;

  let nuevaCuenta = {
    codigo: codigoCuenta,
    fecha: new Date().toLocaleDateString(),
    saldo: 0
  };

  cuentas.push(nuevaCuenta);
  console.log("Cuenta creada con el código:", codigoCuenta);
}


function consignar(codigo, monto) {
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].codigo === codigo) {
      cuentas[i].saldo += monto;
      console.log("Consignación exitosa. Nuevo saldo:", cuentas[i].saldo);
      return;
    }
  }
  console.log("Cuenta no encontrada.");
}


function retirar(codigo, monto) {
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].codigo === codigo) {
      if (cuentas[i].saldo >= monto) {
        cuentas[i].saldo -= monto;
        console.log("Retiro exitoso. Nuevo saldo:", cuentas[i].saldo);
      } else {
        console.log("Fondos insuficientes.");
      }
      return;
    }
  }
  console.log("Cuenta no encontrada.");
}


function consultarCuenta(codigo) {
  for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].codigo === codigo) {
      console.log("Información de la cuenta:", cuentas[i]);
      return cuentas[i];
    }
  }
  console.log("Cuenta no encontrada.");
  return null;
}


function listarCuentas() {
  console.log("Listado de cuentas:");
  for (let i = 0; i < cuentas.length; i++) {
    console.log(cuentas[i]);
  }
}