<?php

error_reporting(E_ALL & ~E_DEPRECATED);

$db=mysql_connect("localhost", "root");
mysql_select_db("booking", $db);
/*$result=mysql_query("SELECT * FROM User",$db);
$myrow=mysql_fetch_array($result);
echo $myrow["email"];*/

$first_name=$_POST['first_name'];
$last_name=$_POST['last_name'];
$email=$_POST['email'];
$password=$_POST['password'];
$repeat_password=$_POST['repeat_password'];


$insert_sql = "INSERT INTO user (first_neme, last_name, email, password)" .
    "VALUES('{$first_name}', '{$last_name}', '{$email}', '{$password}');";
mysql_query($insert_sql);



/*$result=mysql_query("INSERT INTO User (first_neme, last_name, email, password) VALUES ($first_name, $last_name, $email, $password, )");*/
if ($result=='true')
{
    echo "Sign up";
}
else{
    echo "Error";
}
?>