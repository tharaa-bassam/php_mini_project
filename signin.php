<?php
include "connection.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    print_r($data);
    $password = $data['password'];
    $userEmail = $data['email'];
    $firstname  = $data['fname'];
    $lastname = $data['lname'];
    $famname = $data['famname'];
    $midname = $data['midname'];
    $pass_confirm = $data['confpass'];
    $phone = $data['phone'];
    $date = $data['date'];

    $sql = "INSERT INTO info (first_name, middle_name, last_name, family_name, email, mobile, password, date) 
    VALUES ('$firstname', '$midname', '$lastname', '$famname','$userEmail','$phone','$password','$date')";
    $result = $conn->query($sql);
    $response = array();

    if ($result === TRUE) {
        $response['message'] = "Data stored successfully";
        // Redirect to index.html
        echo "<script>window.location.href='index.html'</script>"; 
        exit; // Ensure script execution stops after redirection
    } else {
        $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
    }

    echo json_encode($response);
}
$conn->close();


?>
