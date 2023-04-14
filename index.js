// Esta es una función para abrir o cerrar el menú hamburguesa
function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  }
  
// Agrega el evento de click al botón de hamburguesa
  document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    toggleMobileMenu();
});
  