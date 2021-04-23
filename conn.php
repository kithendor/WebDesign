<?php

$host_db = "localhost";
$username_db = "root";
$password_db = "";
$name_db = "mysystemdb";

$conn =new mysqli($host_db,$username_db,$password_db,$name_db);

if($conn->connect_error){
    die("Error: ".$conn->connect_error);
}

?>