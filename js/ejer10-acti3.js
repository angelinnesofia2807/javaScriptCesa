function eliminarDuplicados(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    let encontrado = false;
    
    for (let j = 0; j < resultado.length; j++) {
      if (arr[i] === resultado[j]) {
        encontrado = true;
        break; 
      }
    }
    
    if (!!encontrado) {
      resultado.push(arr[i]);
    }
  }
  return resultado;
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4])); 