<?php
$db = getenv('DB');
$db_host = getenv('DB_HOST');
$db_password = getenv('DB_PASSWORD');
$db_user = getenv('DB_USER');

 $mysqli = new mysqli($db_host,$db_user,$db_password,$db);

?>