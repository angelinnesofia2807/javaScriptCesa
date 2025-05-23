function reemplazarElemento(arr, antiguo, nuevo) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === antiguo) {
      resultado.push(nuevo); 
    } else {
      resultado.push(arr[i]); 
    }
  }
  return resultado;
}

console.log(reemplazarElemento([1, 2, 3, 2], 2, 9));