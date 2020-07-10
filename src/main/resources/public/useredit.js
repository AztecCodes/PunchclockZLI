//Variablen
const URL = 'http://localhost:8081';
let users = [];
let findEntry = null;
let bearerKey = localStorage.getItem("JWT");

//Zeigt Einträge an
const indexUsers = () => {
    fetch(`${URL}/users`, {
        method: 'GET',
        headers: {
            'Authorization': bearerKey,
        },
    }).then((result) => {
        result.json().then((result) => {
            users = result;
        });
    });
};

//Löscht einen Benutzer
const deleteUser = () => {

    indexUsers();
    const getUsername = localStorage.getItem("savedUsername");

    let id = users.find((element) => element.username === getUsername).id;

    fetch(`${URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((result) => {

    });
};

//Erstellt einen neuen Eintrag
const changePassword = () => {

    const getUsername = localStorage.getItem("savedUsername");

    let credentials = {};

    credentials['username'] = getUsername;
    credentials['password'] = document.getElementById("passwordField").value;
    const confirmPassword = document.getElementById("passwordConfirm").value;

    fetch(`${URL}/users/change`, {
        method: '¨POST',
        headers: {
            'Authorization': bearerKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then((result) => {
        result.json().then((result) => {
            alert(result);
        });
    });
};

//Event-Listener bei Laden vom Dokument
document.addEventListener('DOMContentLoaded', function () {
    const changeButton = document.getElementById("changeButton");
    changeButton.addEventListener('click', () => changePassword())
    const deleteButton = document.getElementById("deleteButton");
    changeButton.addEventListener('click', () => deleteUser())

});