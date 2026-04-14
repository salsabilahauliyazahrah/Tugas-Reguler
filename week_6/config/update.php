<?php
include '../config/database.php';

$id = $_POST['id'];
$username = trim($_POST['username']);
$email = trim($_POST['email']);

// VALIDASI
if (empty($username) || empty($email)) {
    header("Location: ../view/edit.php?id=$id&msg=Data tidak boleh kosong!");
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../view/edit.php?id=$id&msg=Invalid email address.");
    exit;
}

// CEK DUPLIKAT (kecuali data sendiri)
$check = mysqli_query($conn, 
    "SELECT * FROM users WHERE (username='$username' OR email='$email') AND id != $id"
);

if (mysqli_num_rows($check) > 0) {
    header("Location: ../view/edit.php?id=$id&msg=Username/email sudah dipakai!");
    exit;
}

// UPDATE DATA
$query = "UPDATE users SET username='$username', email='$email' WHERE id=$id";

if (mysqli_query($conn, $query)) {
    header("Location: ../view/read.php?msg=Data berhasil diupdate!");
} else {
    header("Location: ../view/edit.php?id=$id&msg=Gagal update!");
}