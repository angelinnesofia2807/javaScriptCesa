function contarPares(arr) {
  let contador = 0;
  //arr-una lista de valores

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      contador++;
    }
  }

  return contador;
}

console.log(contarPares([1, 2, 4, 7, 10]));