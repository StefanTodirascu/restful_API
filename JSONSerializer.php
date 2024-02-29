<?php

require_once 'Product.php';
class JSONSerializer
{
    static public function GetJsonAPI($product)
    {
        return [
            "type" => "products",
            "id" => $product->getId(),
            "attributes" => [
                "nome" => $product->getNome(),
                "marca" => $product->getMarca(),
                "prezzo" => $product->getPrezzo()
            ]
        ];
    }

}
