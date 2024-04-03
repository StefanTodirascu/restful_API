fetch("http://192.168.2.206:8081/products")

.then(function(response){
    return response.json();
})

.then(function(products){
    console.log(products);
    var placeholder = document.querySelector("#table");
    var out = "";
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


    placeholder.innerHTML = out;
})
