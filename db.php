<?php
$servername = "ip-address:3306";
$username = "user";
$password = "password";
$dbname = "Allotment";

$mysqli = new mysqli($servername,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 ?>
