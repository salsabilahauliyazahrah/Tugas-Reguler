<!-- Nama: Auliya Az Zahrah Salsabilah 
NRP: 162023026 -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas P5</title>

    <style>
        table{
            border-collapse: collapse;
        }

        td{
            width: 60px;
            height: 60px;
            text-align: center;
            border: 2px solid black;
            font-size: 18px;
        }

        .Merah:hover{
            background-color: red;
            color: white;
        }

        .Kuning:hover{
            background-color: yellow;
        }        

        .Hijau:hover{
            background-color: green;
            color: white;
        }

        .Biru:hover{
            background-color: blue;
            color: white;
        }

        .Coklat:hover{
            background-color: brown;
            color: white;
        }
    </style>
</head>
<body>
    <table>
        <?php 
        $warna = ["Merah", "Kuning", "Hijau", "Biru", "Coklat"];

        for ($i = 1; $i <= 5; $i++) {

            echo"<tr>";

            for($j=1; $j<=5; $j++) {
                $simpanWarnaHover = $warna[($i-1) % 5];

                echo "<td class='$simpanWarnaHover'>$i, $j</td>";
            }
            echo "</tr>";
        }
        ?>
    </table>
</body>
</html>