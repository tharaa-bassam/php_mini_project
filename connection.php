<?php
$serverName= "localhost";
$userName= "tharaa";
$password= "test1234";
$dbName= "users";


$conn = new mysqli($serverName , $userName , $password , $dbName);
if($conn->connect_error){
    die("Connection Faild: ".$conn->connect_error);
}
else{
    // echo "Connection succeeded";   
}

?>