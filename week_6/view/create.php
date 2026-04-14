<?php include '../config/database.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Create</title>
    <link rel="stylesheet" href="../style/style.css">
</head>
<body>

<div class="container">
    <h2>Create User</h2>

    <div class="input-group">
        
    </div>
    <form action="../config/insert.php" method="POST">
        <div class="input-group">
            <label for="">Name:</label>
            <input type="text" name="username" placeholder="Name">
            <span class="tooltip">Please fill out this field.</span>
        </div>        


        <div class="input-group">
            <label for="">Email:</label>
            <input type="text" name="email" placeholder="Email">            
            <span class="tooltip">Please fill out this field.</span>                          
        </div>    

        <?php
        if (isset($_GET['msg'])) {
            $type = isset($_GET['type']) ? $_GET['type'] : 'error';
            echo "<div class='msg $type'>" . $_GET['msg'] . "</div>";
        }
        ?>          

        <button type="submit" class="btn-update">Insert</button>
    </form>

    <div class="nav-box">
        <a href="create.php" class="nav-item active">CREATE</a>
        <a href="read.php" class="nav-item">READ</a>
    </div>

</div>

</body>
</html>