<?php
include '../config/database.php';
$id = $_GET['id'];
$data = mysqli_query($conn, "SELECT * FROM users WHERE id=$id");
$user = mysqli_fetch_assoc($data);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Update</title>
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>

<div class="container">
    <h2>Update User</h2>

    <form action="../config/update.php" method="POST">
        <input type="hidden" name="id" value="<?= $user['id']; ?>">
        
        <input type="text" name="username" value="<?= $user['username']; ?>">
        <input type="text" name="email" value="<?= $user['email']; ?>">
        
        <button type="submit" class="btn-update">Update</button>
    </form>

    <div class="flex">
        <a href="create.php"><button class="btn-main">CREATE</button></a>
        <a href="read.php"><button class="btn-main">READ</button></a>
    </div>
</div>

</body>
</html>