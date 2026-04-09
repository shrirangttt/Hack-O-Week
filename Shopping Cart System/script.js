let cart = [];

// Check duplicate
function findItem(id) {
    return cart.find(item => item.id == id);
}

function getInput() {
    return {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        price: parseFloat(document.getElementById("price").value),
        quantity: parseInt(document.getElementById("quantity").value)
    };
}

// Add at beginning
function addAtBeginning() {
    let item = getInput();

    let existing = findItem(item.id);
    if (existing) {
        existing.quantity += item.quantity;
        alert("Item exists! Quantity updated.");
        return;
    }

    cart.unshift(item);
    displayCart();
}

// Add at end
function addAtEnd() {
    let item = getInput();

    let existing = findItem(item.id);
    if (existing) {
        existing.quantity += item.quantity;
        alert("Item exists! Quantity updated.");
        return;
    }

    cart.push(item);
    displayCart();
}

// Delete item
function deleteItem() {
    let id = document.getElementById("deleteId").value;

    let index = cart.findIndex(item => item.id == id);

    if (index === -1) {
        alert("Item not found!");
        return;
    }

    cart.splice(index, 1);
    displayCart();
}

// Display cart
function displayCart() {
    let table = document.getElementById("cartTable");

    if (!table) {
        console.error("Table not found!");
        return;
    }

    table.innerHTML = "";

    if (cart.length === 0) {
        table.innerHTML = "<tr><td colspan='5'>Cart is Empty</td></tr>";
        return;
    }

    cart.forEach(item => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
        `;

        table.appendChild(row);
    });
}

// Total price
function totalPrice() {
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    document.getElementById("total").innerText =
        "Total Price = ₹ " + total;
}