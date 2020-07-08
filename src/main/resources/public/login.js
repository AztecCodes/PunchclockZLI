
const URL = 'http://localhost:8081';

//Erstellt einen neuen Benutzer
const createUser = () => {

    const credentials = {};
    credentials['username'] = document.getElementById("usernameField").value;
    credentials['password'] = document.getElementById("passwordField").value;

    fetch(`${URL}/users/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)

    })
};

//Erlaubt einen Login
const loginUser = () => {

    const credentialsLogin = {};
    credentialsLogin['username'] = document.getElementById("usernameField").value;
    credentialsLogin['password'] = document.getElementById("passwordField").value;

    fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentialsLogin)

    })
};

//Erstellt den Login-Button
const loginActions = () => {
    const loginButton = document.getElementById("loginButton");
   loginButton.addEventListener('click', () => loginUser())
};

//Erstellt den SignUp-Button
const signActions = () => {
    const deleteButton = document.getElementById("signButton");
    deleteButton.addEventListener('click', () => createUser())
};

//Event-Listener bei Laden vom Dokument
document.addEventListener('DOMContentLoaded', function () {
    loginActions();
    signActions();
});