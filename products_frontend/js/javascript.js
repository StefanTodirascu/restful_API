var data = [
  { id: "1", nome: "Prodotto 1", prezzo: "$10.99", marca: "Marca X" },
  { id: "2", nome: "Prodotto 2", prezzo: "$15.99", marca: "Marca Y" },
  { id: "3", nome: "Prodotto 3", prezzo: "$20.99", marca: "Marca Z" }
];


document.getElementById("creaProdottoBtn").addEventListener("click", function(){
  populateTable();
});



// Ottieni riferimenti agli elementi HTML
var modal = document.getElementById("exampleModal");
var modalTitle = modal.querySelector(".modal-title");

// Quando un bottone con attributo data-title viene cliccato, imposta il titolo del modal con il valore dell'attributo data-title
document.querySelectorAll('[data-title]').forEach(function(button) {
  button.addEventListener('click', function() {
    modalTitle.innerText = this.getAttribute('data-title');
  });
});







// Ottieni riferimenti agli elementi HTML
var modal = document.getElementById("exampleModal");
var modalTitle = modal.querySelector(".modal-title");
var nomeInput = modal.querySelector("#nome");
var marcaInput = modal.querySelector("#marca");
var prezzoInput = modal.querySelector("#prezzo");

// Quando un bottone "Show" viene cliccato, imposta il titolo del modal con il valore dell'attributo data-title
document.querySelectorAll('[data-title="Show"]').forEach(function(button) {
  button.addEventListener('click', function() {
    
    // Ottieni la riga della tabella
    var row = this.closest('tr');

    // Ottieni i dati dalla riga e inseriscili nei campi del form modale
    nomeInput.value = row.cells[1].textContent;
    marcaInput.value = row.cells[3].textContent;
    prezzoInput.value = row.cells[2].textContent;
  });
});











// Funzione per inserire i dati nella tabella
function populateTable() {
  var tbody = document.getElementById("tbody");

  // Itera attraverso i dati e crea una riga per ciascun oggetto
  data.forEach(function(item) {
    var row = document.createElement("tr");

    // Inserisci i dati nelle celle della riga
    row.innerHTML = "<td>" + item.id + "</td>" +
                    "<td>" + item.nome + "</td>" +
                    "<td>" + item.prezzo + "</td>" +
                    "<td>" + item.marca + "</td>" +
                    "<td>" + '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-title="Show">Show</button>' +
                    '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-title="Edit">Edit</button>' +
                    '<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-title="Delete">Delete</button>' + "<td>";

    // Aggiungi la riga al corpo della tabella
    tbody.appendChild(row);


    
  });
}