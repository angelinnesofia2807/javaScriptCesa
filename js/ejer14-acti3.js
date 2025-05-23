function promedio(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i]; 
  }
  let promedio = suma / arr.length; 
  return promedio;
}

console.log(promedio([1, 2, 3, 4])); 