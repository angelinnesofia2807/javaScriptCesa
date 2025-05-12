function mostrarDia() {
    let numero = parseInt(prompt("Ingresa un número del 1 al 7"));
    let resultado = document.getElementById("resultado");

    switch (numero) {
      case 1:
        resultado.textContent = "Lunes";
        break;
      case 2:
        resultado.textContent = "Martes";
        break;
      case 3:
        resultado.textContent = "Miércoles";
        break;
      case 4:
        resultado.textContent = "Jueves";
        break;
      case 5:
        resultado.textContent = "Viernes";
        break;
      case 6:
        resultado.textContent = "Sábado";
        break;
      case 7:
        resultado.textContent = "Domingo";
        break;
      default:
        resultado.textContent = "Número fuera de rango";
    }
  }
