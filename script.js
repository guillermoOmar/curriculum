function mostrarContenido(sectionId) {
  // Ocultar todas las secciones
  var sections = document.getElementsByClassName('content-section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  }

  // Mostrar la sección seleccionada
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

