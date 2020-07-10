//Variablen
const URL = 'http://localhost:8081';
let entries = [];
let findEntry = null;
let bearerKey = localStorage.getItem("JWT");
let getUsername = localStorage.getItem("savedUsername");


//Löscht einen Benutzer
const deleteUser = () => {

    const credentials = {};
    credentials['username'] = getUsername;
    credentials['password'] = document.getElementById("passwordField").value;
    const confirmPassword = document.getElementById("passwordConfirm").value;

    fetch(`${URL}/users/change`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((result) => {

    });
};

//Erstellt einen neuen Eintrag
const changePassword = () => {

    const credentials = {};
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
});