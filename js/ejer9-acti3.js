function invertirarreglo(arr) {
  let arregloInvertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arregloInvertido.push(arr[i]);
  }
  return arregloInvertido;
}

console.log(invertirarreglo([1, 2, 3, 4])); 