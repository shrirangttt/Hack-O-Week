let contacts = [];
const MAX = 100;

// Add Contact
function addContact() {
    if (contacts.length >= MAX) {
        alert("Contact list is full!");
        return;
    }

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!name || !phone || !email) {
        alert("Fill all fields!");
        return;
    }

    contacts.push({ name, phone, email });
    alert("Contact added!");

    clearInputs();
}

// Display Contacts
function displayContacts() {
    let table = document.getElementById("contactTable");
    table.innerHTML = "";

    if (contacts.length === 0) {
        table.innerHTML = "<tr><td colspan='3'>No contacts found</td></tr>";
        return;
    }

    contacts.forEach(c => {
        let row = `<tr>
            <td>${c.name}</td>
            <td>${c.phone}</td>
            <td>${c.email}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

// Sort Contacts (Bubble Sort)
function sortContacts() {
    for (let i = 0; i < contacts.length - 1; i++) {
        for (let j = 0; j < contacts.length - i - 1; j++) {
            if (contacts[j].name.toLowerCase() > contacts[j + 1].name.toLowerCase()) {
                let temp = contacts[j];
                contacts[j] = contacts[j + 1];
                contacts[j + 1] = temp;
            }
        }
    }
    alert("Contacts sorted!");
    displayContacts();
}

// Binary Search
function binarySearch(name) {
    let low = 0, high = contacts.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midName = contacts[mid].name.toLowerCase();

        if (midName === name.toLowerCase()) return mid;
        else if (midName < name.toLowerCase()) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

// Search Contact
function searchContact() {
    if (contacts.length === 0) {
        alert("No contacts!");
        return;
    }

    let name = prompt("Enter name to search:");
    sortContacts(); // Ensure sorted

    let index = binarySearch(name);

    if (index === -1) {
        alert("Contact not found!");
    } else {
        alert(`Found: ${contacts[index].name}, ${contacts[index].phone}, ${contacts[index].email}`);
    }
}

// Update Contact
function updateContact() {
    let name = prompt("Enter name to update:");
    let index = contacts.findIndex(c => c.name.toLowerCase() === name.toLowerCase());

    if (index === -1) {
        alert("Contact not found!");
        return;
    }

    let newPhone = prompt("Enter new phone:", contacts[index].phone);
    let newEmail = prompt("Enter new email:", contacts[index].email);

    contacts[index].phone = newPhone;
    contacts[index].email = newEmail;

    alert("Updated successfully!");
    displayContacts();
}

// Delete Contact
function deleteContact() {
    let name = prompt("Enter name to delete:");
    let index = contacts.findIndex(c => c.name.toLowerCase() === name.toLowerCase());

    if (index === -1) {
        alert("Contact not found!");
        return;
    }

    contacts.splice(index, 1);
    alert("Deleted successfully!");
    displayContacts();
}

// Clear Inputs
function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}