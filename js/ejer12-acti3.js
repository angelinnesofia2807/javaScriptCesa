function indiceValor(arr, valor) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i; 
    }
  }
  return -1; 
}

console.log(indiceValor([1, 3, 5, 7], 5)); 