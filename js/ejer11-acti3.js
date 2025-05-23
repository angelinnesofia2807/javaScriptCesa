function nombresAMayuscula(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    let nombreEnMayuscula = arr[i].toUpperCase(); //touppercase para convertir en mayuscualas el nombre
    resultado.push(nombreEnMayuscula);            
  }
  return resultado;
}

console.log(nombresAMayuscula(["sofia", "angelinne", "laura"])); 