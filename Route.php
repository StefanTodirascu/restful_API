<?php
require_once 'Product.php';
require_once 'JSONSerializer.php';

// Definisci un array associativo per mappare le route
$routes = [
    'GET' => [],
    'POST' => [],
    'PUT' => [],
    'DELETE' => []
];

// Funzione per aggiungere una route
function addRoute($method, $path, $callback)
{
    global $routes;
    $routes[$method][$path] = $callback;
}

// Funzione per ottenere il metodo della richiesta HTTP
function getRequestMethod()
{
    return $_SERVER['REQUEST_METHOD'];
}

// Funzione per ottenere il percorso richiesto
function getRequestPath()
{
    $path = $_SERVER['REQUEST_URI'];
    $path = parse_url($path, PHP_URL_PATH);
    return rtrim($path, '/');
}

// Funzione per gestire la richiesta
function handleRequest()
{
    global $routes;

    $method = getRequestMethod();
    $path = getRequestPath();

    // Verifica se esiste una route per il metodo e il percorso richiesti
    if (isset($routes[$method])) {
        foreach ($routes[$method] as $routePath => $callback) {
            // Verifica se il percorso richiesto corrisponde al percorso della route
            if (preg_match('#^' . $routePath . '$#', $path, $matches)) {
                // Chiamata al callback passando l'ID come parametro
                call_user_func_array($callback, $matches);
                return;
            }
        }
    }

    // Ritorna un errore 404 se la route non è stata trovata
    http_response_code(404);
    echo "404 Not Found";
}


//route fot GET_/products
addRoute('GET', '/products', function () {
    header("Location: /products");
    header('Content-Type: application/vnd.api+json');
    header("Access-Control-Allow-Origin: *");

    if (!$products = Product::getProducts()) {
        http_response_code(500); //server error
        exit;
    }

    $json = [];
    foreach ($products as $product) {
        $json[] = JSONSerializer::GetJsonAPI($product);
    }
    $data = ["data" => $json];
    http_response_code(200); //ok
    echo json_encode($data, JSON_PRETTY_PRINT);
    echo "\r\n";
});


//route fot GET_/products/id
addRoute('GET', '/products/(\d+)', function ($uri) {
    header("Location: /products");
    header('Content-Type: application/vnd.api+json');

    $uriEploded = explode("/", $uri);
    $id = $uriEploded[2];
    $product = Product::getProduct($id);
    if (!$product) {
        http_response_code(404);
        exit();
    }
    $json = JSONSerializer::GetJsonAPI($product);
    $data = ["data" => $json];
    http_response_code(200);
    echo json_encode($data, JSON_PRETTY_PRINT);
});

//route fot DELETE_/products/id
addRoute('DELETE', '/products/(\d+)', function ($uri) {
    header("Location: /products");
    header('Content-Type: application/vnd.api+json');

    $uriEploded = explode("/", $uri);
    $id = $uriEploded[2];
    $product = Product::getProduct($id);
    if (!$product) {
        http_response_code(404); //server error
        //echo "Prodotto non trovato";
        exit;
    }

    if ($product->delete()) {
        http_response_code(204);
        exit;
    } else {
        http_response_code(500); //server error
        exit;
    }
});


//route for POST_/products
addRoute("POST", "/products", function () {
    header("Location: /products");
    header('Content-Type: application/vnd.api+json');

    $post= json_decode(file_get_contents("php://input"), true);
    $product = Product::Create($post["data"]["attributes"]);
    if(!$product){
        http_response_code(500);
        exit();
    }
    else{
        $json = JSONSerializer::GetJsonAPI($product);
        $data = ["data" => $json];
        http_response_code(201);
        echo json_encode($data, JSON_PRETTY_PRINT);
    }

});

//route for PATCH_/products
addRoute('PATCH', '/products/(\d+)', function ($uri) {
    header("Location: /products");
    header('Content-Type: application/vnd.api+json');

    $uriEploded = explode("/", $uri);
    $id = $uriEploded[2];
    $product = Product::getProduct($id);
    if(!$product)
    {
        http_response_code(500);
        exit();
    }
    $post= json_decode(file_get_contents("php://input"), true);
    if($product->update($post["data"]["attributes"]))
    {
        $json = JSONSerializer::GetJsonAPI(Product::getProduct($id));
        $data = ["data" => $json];
        http_response_code(200);
        echo json_encode($data, JSON_PRETTY_PRINT);
    }
});

// Esegui il gestore della richiesta
handleRequest();
