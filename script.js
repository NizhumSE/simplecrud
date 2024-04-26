document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("crud-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const dataContainer = document.getElementById("data-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = nameInput.value;
        const email = emailInput.value;
        if (name.trim() === '' || email.trim() === '') {
            alert("Please fill out all fields");
            return;
        }
        const newItem = createDataItem(name, email);
        dataContainer.appendChild(newItem);
        nameInput.value = '';
        emailInput.value = '';
    });

    function createDataItem(name, email) {
        const item = document.createElement("div");
        item.classList.add("data-item");
        const nameElement = document.createElement("span");
        nameElement.textContent = name;
        const emailElement = document.createElement("span");
        emailElement.textContent = email;
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function() {
            nameInput.value = name;
            emailInput.value = email;
            dataContainer.removeChild(item);
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            dataContainer.removeChild(item);
        });
        item.appendChild(nameElement);
        item.appendChild(emailElement);
        item.appendChild(editButton);
        item.appendChild(deleteButton);
        return item;
    }
});
