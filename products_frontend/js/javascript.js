/*var data = [
  { id: "1", nome: "Prodotto 1", prezzo: "$10.99", marca: "Marca X" },
  { id: "2", nome: "Prodotto 2", prezzo: "$15.99", marca: "Marca Y" },
  { id: "3", nome: "Prodotto 3", prezzo: "$20.99", marca: "Marca Z" }
];*/


var modal = document.getElementById("exampleModal");
var modalTitle = modal.querySelector(".modal-title");
var modalBody = modal.querySelector(".modal-body");

document.getElementById("creaProdottoBtn").addEventListener("click", function () {
});



// Funzione per inserire i dati nella tabella
function populateTable() {
  var tbody = document.getElementById("tbody");

  // Itera attraverso i dati e crea una riga per ciascun oggetto
  data.forEach(function (item) {
    var row = document.createElement("tr");

    // Inserisci i dati nelle celle della riga
    row.innerHTML = "<td>" + item.id + "</td>" +
      "<td>" + item.nome + "</td>" +
      "<td>" + item.prezzo + "</td>" +
      "<td>" + item.marca + "</td>" +
      "<td>" + '<button id="showModalBtn" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Show\')">Show</button>' +
      '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Edit\')">Edit</button>' +
      '<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Delete\')">Delete</button>' + "<td>";

    tbody.appendChild(row);// Ottieni riferimenti agli elementi HTML
  });
};





function cambiaModale(title) {
modalTitle.innerText = title;
modalBody.innerHTML = "";

  // Aggiungi il nuovo contenuto in base al titolo
  switch (title) {
    case "Show":
      modalBody.innerHTML = "<p>ID: " + data[0].id + "</p>" +
        "<p>Nome: " + data[0].nome + "</p>" +
        "<p>Marca: " + data[0].marca + "</p>" +
        "<p>Prezzo: " + data[0].prezzo + "</p>";
      break;
    case "Delete":
      modalBody.innerHTML = "<p>Vuoi cancellare questo prodotto?</p>" +
        "<button type='button' class='btn btn-secondary'>Elimina</button>"
        ; break;
    case "Edit":
      modalBody.innerHTML =
        "<input type='text' id='productName' class='form-control' placeholder='Nome'><br>" +
        "<input type='text' id='productBrand' class='form-control'  placeholder='Marca'><br>" +
        "<input type='number' id='productPrice' class='form-control' placeholder='Prezzo'>"+
        "<button type='button' class='btn btn-secondary'>Save</button>"; break;
  }
}



  // Funzione per generare le righe della tabella
  /*function generateTableRows() {
    var tbody = document.querySelector("#tbody");

    data.forEach(function(product) {
      var row = document.createElement("tr");

      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.attributes.nome}</td>
        <td>${product.attributes.marca}</td>
        <td>${product.attributes.prezzo}</td>
        <td><button id="showModalBtn" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Show\')">Show</button>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Edit\')">Edit</button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Delete\')">Delete</button><td>
      `;

      tbody.appendChild(row);
    });
  }*/

  // Chiamata alla funzione per generare le righe della tabella con i dati JSON forniti
