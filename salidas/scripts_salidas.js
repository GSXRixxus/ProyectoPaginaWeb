// Base de datos de productos (simulada)
let inventory = [
    { id: 1, name: "Producto A", price: 10, stock: 20 },
    { id: 2, name: "Producto B", price: 15, stock: 15 },
    { id: 3, name: "Producto C", price: 20, stock: 10 },
];

// Cargar productos en el select
const productSelect = document.getElementById("product");
inventory.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name} - $${product.price} (Stock: ${product.stock})`;
    productSelect.appendChild(option);
});

// Registrar venta
document.getElementById("salesForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener datos del formulario
    const productId = parseInt(document.getElementById("product").value);
    const quantity = parseInt(document.getElementById("quantity").value);

    // Buscar el producto seleccionado
    const selectedProduct = inventory.find(product => product.id === productId);

    // Validar stock
    if (selectedProduct.stock < quantity) {
        alert("No hay suficiente stock para este producto.");
        return;
    }

    // Actualizar inventario
    selectedProduct.stock -= quantity;

    // Calcular total de la venta
    const totalSale = selectedProduct.price * quantity;

    // Mostrar resumen de la venta
    const summary = document.getElementById("summary");
    summary.innerHTML = `
        <p>Producto: ${selectedProduct.name}</p>
        <p>Cantidad: ${quantity}</p>
        <p>Precio unitario: $${selectedProduct.price}</p>
        <p>Total: $${totalSale}</p>
    `;

    // Generar recibo de venta
    const receipt = document.getElementById("receipt");
    receipt.innerHTML = `
        <h3>Recibo de Venta</h3>
        <p>Producto: ${selectedProduct.name}</p>
        <p>Cantidad: ${quantity}</p>
        <p>Precio unitario: $${selectedProduct.price}</p>
        <p>Total: $${totalSale}</p>
        <p>Fecha: ${new Date().toLocaleString()}</p>
    `;

    // Actualizar lista de productos en el select
    productSelect.innerHTML = '<option value="" disabled selected>Seleccione un producto</option>';
    inventory.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = `${product.name} - $${product.price} (Stock: ${product.stock})`;
        productSelect.appendChild(option);
    });

    // Limpiar formulario
    document.getElementById("salesForm").reset();
});