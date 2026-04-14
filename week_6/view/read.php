<?php include '../config/database.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Read</title>
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>

<div class="container">
    <h2>Read Data</h2>

    <?php
    $result = mysqli_query($conn, "SELECT * FROM users");

    while ($row = mysqli_fetch_assoc($result)) {
    ?>
        <div class="user-box">
            <div class="user-info">
                <b><?php echo $row['username']; ?></b>
                <span class="email"><?php echo $row['email']; ?></span>
            </div>

            <div class="user-action">
                <a href="edit.php?id=<?php echo $row['id']; ?>">
                    <button class="btn-edit">Edit</button>
                </a>
                <a href="../config/delete.php?id=<?php echo $row['id']; ?>" 
                onclick="return confirm('Are you sure?')">
                    <button class="btn-delete">Delete</button>
                </a>
            </div>
        </div>
    <?php } ?>

    <div class="nav-box">
        <a href="create.php" class="nav-item active">CREATE</a>
        <a href="read.php" class="nav-item">READ</a>
    </div>
</div>

</body>
</html>