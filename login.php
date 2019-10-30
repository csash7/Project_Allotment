<?php
session_start();
$error='';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (empty($_POST['username']) || empty($_POST['password'])) {
$error = "Username or Password is invalid";
}
else
{

$username=$_POST['username'];
$password=$_POST['password'];

$connection = new mysqli("IPAddress", "user","password","DB");

$username = stripslashes($username);
$password = stripslashes($password);
$username = mysqli_real_escape_string($connection,$username);
$password = mysqli_real_escape_string($connection,$password);

$sql = "select * from userData where password='$password' AND username='$username'";
$query = mysqli_query($connection,$sql);
$row = mysqli_fetch_array($query,MYSQLI_ASSOC);
$count = mysqli_num_rows($query);
if($count == 1){
$_SESSION['login_user']=$username;
header("location: allotment.php");
$error = "Logging in...";
} else {
$error = "Username or Password is invalid";
}
mysqli_close($connection);
}
}
?>
