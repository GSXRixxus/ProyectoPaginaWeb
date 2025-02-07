function mostrarAlerta(mensaje, tipo) {
    const contenedor = document.getElementById('contenedor-alertas');
    const alerta = document.createElement('div');
    alerta.className = `alerta ${tipo}`;
    alerta.textContent = mensaje;
    contenedor.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// Ejemplo de uso
mostrarAlerta("Producto X está por agotarse", "advertencia");
mostrarAlerta("Compra exitosa", "éxito");

function mostrarAlertaStockBajo(producto, stockActual) {
    const contenedor = document.getElementById('contenedor-alertas');

    // Crear la alerta
    const alerta = document.createElement('div');
    alerta.className = 'alerta stock-bajo';
    alerta.innerHTML = `
        <span>¡Atención! El producto <strong>${producto}</strong> tiene stock bajo (${stockActual} unidades).</span>
        <span class="cerrar" onclick="this.parentElement.remove()">×</span>
    `;

    // Agregar la alerta al contenedor
    contenedor.appendChild(alerta);

    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// Ejemplo de uso
mostrarAlertaStockBajo("Arroz", 3); // Muestra una alerta para el producto "Arroz" con 3 unidades en stock
