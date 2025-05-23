function generarContraseña() {
  // Caracteres disponibles
  let letrasMayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letrasMinus = 'abcdefghijklmnopqrstuvwxyz';
  let numeros = '0123456789';
  let especiales = '@#$%&()=?¿*+[]{}';

  let c1 = letrasMayus[Math.floor(Math.random() * letrasMayus.length)];
  let c2 = letrasMayus[Math.floor(Math.random() * letrasMayus.length)];

  let c3 = letrasMinus[Math.floor(Math.random() * letrasMinus.length)];
  let c4 = letrasMinus[Math.floor(Math.random() * letrasMinus.length)];

  let c5 = numeros[Math.floor(Math.random() * numeros.length)];
  let c6 = numeros[Math.floor(Math.random() * numeros.length)];

  let c7 = especiales[Math.floor(Math.random() * especiales.length)];
  let c8 = especiales[Math.floor(Math.random() * especiales.length)];

  
  let contraseña = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8;

  return contraseña;
}

// Mostrar en consola
console.log(generarContraseña());
