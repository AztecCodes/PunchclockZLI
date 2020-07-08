
//Erstellt einen neuen Eintrag
const createUser = () => {

    const credentials = {};
    credentials['username'] = document.getElementById("usernameField");
    credentials['password'] = document.getElementById("passwordField");

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
const loginActions = () => {
    const deleteButton = document.getElementById("signButton");
    deleteButton.addEventListener('click', () => createUser())
}
