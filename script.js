// Validación de inicio de sesión
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'inoac' && password === 'inoac2025') {
        // Mostrar el dashboard y ocultar el login
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
    return false; // Evitar que el formulario se envíe
}

// Mostrar el formulario correspondiente según la opción del menú
function showInventory() {
    const action = document.getElementById('inventoryMenu').value;
    document.getElementById('addItemForm').style.display = 'none';
    document.getElementById('viewItemsList').style.display = 'none';

    if (action === 'addItem') {
        document.getElementById('addItemForm').style.display = 'block';
    } else if (action === 'viewItems') {
        document.getElementById('viewItemsList').style.display = 'block';
        loadItems();
    }
}

// Cargar los productos (solo de ejemplo)
function loadItems() {
    const items = [
        { name: 'Producto A', quantity: 10 },
        { name: 'Producto B', quantity: 20 }
    ];

    const itemsList = document.getElementById('itemsList');
    itemsList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Cantidad: ${item.quantity}`;
        itemsList.appendChild(li);
    });
}
