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

// Obtener los datos del formulario
$producto_id = $_POST['producto_id'];
$cantidad = $_POST['cantidad'];

// Insertar los datos en la tabla productos
$sql = "INSERT INTO productos (producto_id, cantidad) VALUES ('$producto_id', '$cantidad')";

if ($conn->query($sql) === TRUE) {
    echo "Entrada de producto guardada correctamente.";
} else {
    echo "Error al guardar: " . $conn->error;
}

$conn->close();
?>
<?php
echo "PHP está funcionando!";
?>
