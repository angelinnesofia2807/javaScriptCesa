function sumarreglo(numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }

  return suma;
}

console.log(sumarreglo([1, 2, 3, 4]));