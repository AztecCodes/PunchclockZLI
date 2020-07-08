
//Erstellt einen neuen Eintrag
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
    }).then((result) => {
        result.json().then((entry) => {

        });
    });
};

//Erstellt einen neuen Eintrag
const loginUser = () => {

};

//Erstellt den Login-Button
const loginActions = () => {
    const deleteButton = document.getElementById("loginButton");
    deleteButton.addEventListener('click', () => loginUser())
}

//Erstellt den SignUp-Button
const signActions = () => {
    const deleteButton = document.getElementById("signButton");
    deleteButton.addEventListener('click', () => createUser())
}

//Event-Listener bei Laden vom Dokument
document.addEventListener('DOMContentLoaded', function () {
    signActions();
});