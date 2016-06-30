<?php
require_once 'db_connection.php';

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$password = $_POST["password"];
$repeat_password=$_POST["repeat_password"];


if ($repeat_password==$password)
{
    echo "True. ";
}
else{
    echo "False. ";
}
if ($first_name=='Puiul')
{
    $user_admin=1;
}
else{
    $user_admin=0;
}

$avatar='0';

//$sth =$db->prepare($sql = 'SELECT * FROM user WHERE email=:email AND password=:password');
$sth =$db->prepare('SELECT * FROM user WHERE email=:email AND password=:password');
$sth->execute([':email'=>$email, ':password'=>$password]);

$sth=$sth->fetchAll(PDO::FETCH_OBJ);

if (!$sth) {
    $sql=$db->prepare("INSERT INTO user (id_user, first_name, last_name, password, email, avatar) VALUES (null, :first_name, :last_name, :password, :email, :avatar)");
    $sql->bindParam(':first_name',$first_name);
    $sql->bindParam(':last_name',$last_name);
    $sql->bindParam(':email',$email);
    $sql->bindParam(':password',$password);
    $sql->bindParam(':avatar',$avatar);

    $sql->execute();

}

else {
    echo "this user already exist ";
}

?>