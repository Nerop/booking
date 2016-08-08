<?php
require_once 'db_connection.php';

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$password = $_POST["password"];
$repeat_password=$_POST["repeat_password"];


if ($repeat_password==$password)
{
    $sth =$db->prepare('SELECT * FROM user WHERE email=:email AND password=:password');
    $sth->execute([':email'=>$email, ':password'=>$password]);

    $sth=$sth->fetchAll(PDO::FETCH_OBJ);

    if (!$sth) {
        $sql=$db->prepare("
                            INSERT INTO user (id_user, first_name, last_name, password, email, avatar)
                            VALUES (null, :first_name, :last_name, :password, :email, :avatar)
                         ");
        $sql->bindParam(':first_name',$first_name);
        $sql->bindParam(':last_name',$last_name);
        $sql->bindParam(':email',$email);
        $sql->bindParam(':password',$password);
        $sql->bindParam(':avatar',$avatar);

        $sql->execute();

    }

    else {
        header('Content-Type: text/html; charset=utf-8');
        echo "Данный пользователь уже зарегистрирован";

}
}
else{
    header('Content-Type: text/html; charset=utf-8');
    echo "Пароли не совпадают";
}


if ($first_name=='Puiul')
{
    $user_admin=1;
}
else{
    $user_admin=0;
}

$upload = 'upload/';
$avatar = $_FILES['avatar']['name'];
if (!$avatar) {
    $avatar = '/images/User.jpg';
} else {
    $avatar = $upload . time().basename($_FILES['avatar']['name']);
    $avatar = copy($_FILES['avatar']['tmp_name'], $avatar);
}




?>
