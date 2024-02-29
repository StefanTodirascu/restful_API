<?php

class DBManager
{
    public static function Connect()
    {
        $dsn = "mysql:dbname=razvanstefan_todirascu_ecommerce;host=192.168.2.200";
        try {
            $pdo = new PDO($dsn, 'razvanstefan_todirascu', 'completest.buffeted.locomotion.');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $exception) {
            die("Connection Fail: " . $exception->getMessage());
        }
    }

}