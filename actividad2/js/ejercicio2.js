function verificarVoto() {
    let edad = parseInt(prompt("¿Cuántos años tienes?"));
    let cedula = prompt("¿Tienes cédula? (sí/no)");
    let inscrita = prompt("¿Tu cédula está inscrita? (sí/no)");

    if (edad >= 18 && cedula === "si" && inscrita === "si") {
      document.getElementById("resultado").textContent = "¡Puedes votar!";
    } else {
      document.getElementById("resultado").textContent = "No puedes votar.";
    }
  }
