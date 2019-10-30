<?php
$servername = "10.128.0.3:3306";
$username = "csash7";
$password = "parvathi";
$dbname = "Allotment";

$mysqli = new mysqli($servername,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 ?>
