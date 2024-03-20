// Ottieni riferimenti agli elementi HTML
var modal = document.getElementById("exampleModal");
var modalTitle = modal.querySelector(".modal-title");

// Quando un bottone con attributo data-title viene cliccato, imposta il titolo del modal con il valore dell'attributo data-title
document.querySelectorAll('[data-title]').forEach(function(button) {
  button.addEventListener('click', function() {
    modalTitle.innerText = this.getAttribute('data-title');
  });
});

