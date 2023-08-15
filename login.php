<?php

include "connection.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $password = $data['password'];
    $userEmail = $data['email'];

    $sql = "SELECT * FROM info WHERE email = '$userEmail' and password = '$password'";
    $result = $conn->query($sql);
    $rows = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
    
        } 
    
    }
}
echo json_encode($rows);
$conn->close();

?>
