<?php
$host = 'localhost'; // o tu host
$user = 'root'; // tu usuario de base de datos
$pass = ''; // tu contraseña
$dbname = 'inventario'; // nombre de la base de datos

// Conexión a la base de datos
$conn = new mysqli($host, $user, $pass, $dbname);

// Establecer la codificación de caracteres
$conn->set_charset("utf8");

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM productos";
$result = $conn->query($sql);

echo "<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Productos Registrados</title>
    <link rel='stylesheet' href='styles.css'> <!-- Puedes agregar tu propio CSS -->
</head>
<body>";

echo "<h2>Productos Registrados</h2>";
echo "<table border='1'>
        <tr>
            <th>ID Producto</th>
            <th>Cantidad</th>
        </tr>";

if ($result->num_rows > 0) {
    // Mostrar cada fila de datos
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["producto_id"] . "</td>
                <td>" . $row["cantidad"] . "</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No hay productos registrados.";
}

echo "</body></html>";

$conn->close();
?>
