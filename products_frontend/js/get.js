//fetch("http://192.168.2.88:8081/products")

//.then(function(response){
//   return response.json();
//})

//.then(function(products){
//   console.log(products);
//  var placeholder = document.querySelector("#table");
//  var out = "";
/*
    // Inserisci i dati nelle celle della riga
    row.innerHTML = "<td>" + item.id + "</td>" +
      "<td>" + item.nome + "</td>" +
      "<td>" + item.prezzo + "</td>" +
      "<td>" + item.marca + "</td>" +
      "<td>" + '<button id="showModalBtn" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Show\')">Show</button>' +
      '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Edit\')">Edit</button>' +
      '<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="cambiaModale(\'Delete\')">Delete</button>' + "<td>";
    */
/*for(let product of products){
    out += 
    "<tr>" +
        "<td>" + product.nome + "</td>" +
    "</tr>";
}*/


//   placeholder.innerHTML = out;
//})

document.addEventListener('DOMContentLoaded', function () {
    generateTableRows();
    console.log('Il DOM è stato completamente caricato');
    // Puoi assegnare qui la tua funzione per l'evento DOM caricato
});





async function richiesta() {
    const response = await fetch("http://192.168.2.88:8081/products");
    const data = await response.json();
    return data.data;
}


async function generateTableRows() {
    var tbody = document.querySelector("#tbody");
    const data = await richiesta();
    data.forEach(function (product) {
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


}
