<?php
require_once __DIR__ . '/vendor/autoload.php';
session_start();
//Twig_Autoloader::register();
$loader = new Twig_Loader_Filesystem(__DIR__ . '/templates');
$twig = new Twig_Environment($loader);

if (isset($_SESSION['user_id']) && empty($_SESSION['user'])) {
    //TODO get user data from DB
    $stmt = $db->prepare('SELECT * FROM `user` WHERE `id` = :id');
    $stmt->bindParam('id', $_SESSION['user_id']);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$user) {
        unset($_SESSION['user_id'], $_SESSION['user']);
    }

    $_SESSION['user'] = $user;
    $twig->addGlobal('user', $_SESSION['user']);
}

echo $twig->render('index.html');
?>
