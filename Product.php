<?php
require_once "DBManager.php";

class Product
{
    private $id;
    private $nome;
    private $prezzo;
    private $marca;


    public function getId()
    {
        return $this->id;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getPrezzo()
    {
        return $this->prezzo;
    }

    public function setPrezzo($prezzo)
    {
        $this->prezzo = $prezzo;
    }

    public function getMarca()
    {
        return $this->marca;
    }

    public function setMarca($marca)
    {
        $this->marca = $marca;
    }

    public static function getProducts()
    {
        $pdo = DBManager::Connect();
        $stmt = $pdo->query("SELECT * FROM products");
        return $stmt->fetchAll(PDO::FETCH_CLASS, 'Product');
    }

    public static function getProduct($id)
    {
        $pdo = DBManager::Connect();
        $stmt = $pdo->prepare("SELECT * FROM products WHERE id = :id LIMIT 1");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetchObject("Product");
    }

    public static function Create($params)
    {
        $pdo = DBManager::Connect();
        $stm = $pdo->prepare("INSERT INTO products (nome, marca, prezzo) VALUES (:nome, :marca, :prezzo)");
        $stm->bindParam(":nome", $params['nome']);
        $stm->bindParam(":marca", $params['marca']);
        $stm->bindParam(":prezzo", $params['prezzo']);
        if($stm->execute()){
            $stm = $pdo->prepare("SELECT * FROM products ORDER BY id DESC LIMIT 1");
            $stm->execute();
            return $stm->fetchObject("Product");
        }
        return false;
    }

    public function update($params)
    {
        $pdo = DBManager::Connect();
        $stmt = $pdo->prepare("UPDATE products SET nome = :nome, marca = :marca, prezzo = :prezzo  WHERE id = :id");
        $stmt->bindParam(':nome', $params['nome']);
        $stmt->bindParam(':marca', $params['marca']);
        $stmt->bindParam(':prezzo', $params['prezzo']);
        $stmt->bindParam(':id', $this->id);
        return $stmt->execute();
    }

    public function delete()
    {
        $pdo = DBManager::Connect();
        $stmt = $pdo->prepare("DELETE FROM products WHERE id = :id");
        $stmt->bindParam(':id', $this->id);
        return $stmt->execute();
    }


}