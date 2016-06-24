
<?php
$db=mysql_connect("localhost", "root");
mysql_select_db("booking", $db);
$result=mysql_query("SELEKT * FROM User", $db);
$myrow=mysql_fetch_array($result);
echo $myrow ["login"];
?>



