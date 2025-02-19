<?php
$host = 'localhost'; // o tu host
$user = 'root'; // tu usuario de base de datos
$pass = ''; // tu contraseña
$dbname = 'inventario'; // nombre de la base de datos

// Conexión a la base de datos
$conn = new mysqli($host, $user, $pass, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT * FROM productos";
$result = $conn->query($sql);

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

$conn->close();
?>
