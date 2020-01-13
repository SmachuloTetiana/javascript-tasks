let tbody = document.querySelector(".table tbody"),
    tForm = document.getElementById("userForm"),
    editedItemIndex = null,
    users = [];

const deleteUser = index => {
    users.splice(index, 1);

    generateTable(users);
}

const editUser = index => {
    const user = users[index];
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.getElementById("email");

    editedItemIndex = index;

    nameInput.value = user.name;
    surnameInput.value = user.surname;
    emailInput.value = user.email;
}

const addUser = event => {
    event.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
    };

    if (Number.isInteger(editedItemIndex)) {
        users[editedItemIndex] = {
            ...users[editedItemIndex],
            ...user
        };

        editedItemIndex = null;
    } else {
        users.push({
            ...user,
            date: new Date()
        });
    }


    generateTable(users);

    tForm.reset();
};

tForm.addEventListener("submit", addUser);

const generateTable = data => {

    tbody.innerHTML = '';

    data.forEach((el, index) => {
        const tRow = document.createElement("tr");

        tRow.innerHTML = `
            <td>${el.name}</td>
            <td>${el.surname}</td>
            <td>${el.email}</td>
            <td>${el.date.getFullYear()}/${el.date.getMonth() + 1}/${el.date.getDate()}</td>
            <td>
                <button type="button" class="btn btn-info" onclick="editUser(${index})">Edit</button>
                <button type="button" class="btn btn-danger delete-user-btn" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(tRow);
    })

};
