<?php

require_once 'db_connection.php';

$last_name = trim($_POST["last_name"]);
$password = trim($_POST["password"]);

if (isset($check)){
    setcookie("$last_name", "$password",time()+86400,"/");
}

$sth =$db->prepare('SELECT * FROM user WHERE last_name=:last_name AND password=:password');
$sth->execute([':last_name'=>$last_name, ':password'=>$password]);

$sth=$sth->fetchAll(PDO::FETCH_OBJ);

if (!$sth)
{
    echo "You must sign up";

}
/*else {
    session_start();
    $_SESSION['user']='$id_user';
    header ('Location: twigconnection.php');
    exit();
}
*/
?>