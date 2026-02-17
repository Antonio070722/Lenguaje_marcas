function cambiarNombre() {
  const nuevoNombre = document.getElementById("nombreInput").value;

  document.getElementById("titulo").textContent = nuevoNombre;
}


function cambiarFondo(){
  // Generar un color aleatorio en formato RGB
  const r = Math.floor(Math.random() * 256); // rojo (0-255)
  const g = Math.floor(Math.random() * 256); // verde (0-255)
  const b = Math.floor(Math.random() * 256); // azul (0-255)

  // Aplicar el color al fondo
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
} 