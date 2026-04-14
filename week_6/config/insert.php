<?php
include 'database.php';

$username = trim($_POST['username']);
$email = trim($_POST['email']);

// validasi kosong 
if (empty($username) || empty($email)) {
    header("Location: ../view/create.php?msg=Data tidak boleh kosong!&type=error");
    exit;
}

//validasi email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../view/create.php?msg=Invalid email address.&type=error");
    exit;
}

//Meriksa duplikat
$check = mysqli_query($conn, "SELECT * FROM users WHERE username='$username' OR email='$email'");
if (mysqli_num_rows($check) > 0) {
    header("Location: ../view/create.php?msg=This email is already registered. Please try another!&type=error");
    exit;
}

//Menambah data
$query = "INSERT INTO users (username, email) VALUES ('$username', '$email')";
if (mysqli_query($conn, $query)) {
    header("Location: ../view/create.php?msg=User has been successfully inserted.&type=success");
} else {
    header("Location: ../view/create.php?msg=Gagal insert data!&type=error");
}