/**
 * JavaScript für Benutzerverwaltung
 */

//Variablen
const URL = 'http://localhost:8081';
let users = [];
let findEntry = null;
let bearerKey = localStorage.getItem("JWT");
let id = 16;

//Zeigt Benutzerprofile an
const indexUsers = () => {
    fetch(`${URL}/users`, {
        method: 'GET',
        headers: {
            'Authorization': bearerKey,
        },

    }).then((result) => {
        result.json().then((result) => {

            const getUsername = localStorage.getItem("savedUsername");


            id = result.find((e) => e.username === getUsername).id;


        });
    });
};

//Löscht einen Benutzer
const deleteUser = () => {

    if (confirm('Delete Account?')) {
        fetch(`${URL}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': bearerKey,
            },

        }).then((result) => {
            alert("Benutzerprofil gelöscht!");
        });
    }
};

//Wechselt das Passwort
const changePassword = () => {

    const getUsername = localStorage.getItem("savedUsername");
    // alert(getUsername);
    let credentials = {};

    credentials['username'] = getUsername;
    credentials['password'] = document.getElementById("passwordField").value;

    if (confirm('Change Password?')) {
        fetch(`${URL}/users/change`, {
            method: 'PUT',
            headers: {
                'Authorization': bearerKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then((result) => {
            result.json().then((result) => {
                alert("passed");
            });
        });
    } else {

    }

};

//Event-Listener bei Laden vom Dokument
document.addEventListener('DOMContentLoaded', function () {
    const changeButton = document.getElementById("changeButton");
    changeButton.addEventListener('click', changePassword)
    const deleteButton = document.getElementById("deleteButton");
    deleteButton.addEventListener('click', deleteUser)
    indexUsers();

});