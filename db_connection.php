<?php
try {
    $dbhost = 'localhost';
    $dbname = 'booking';
    $dbuser = "root";

    $db = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser);
}catch(PDOException $e){
    echo "Возникла ошибка соединения : " . $e->getMessage();
    exit;}
?>