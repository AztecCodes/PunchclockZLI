/**
 * JavaScript für Login-Seite
 */

//Variablen
const URL = 'http://localhost:8081';
let bearerKey = "";
let selectedJob = "";


let job1 = {};

job1["jobTitle"] = "Informatiker";
job1["hourlySalary"] = 125;

let job2 = {};

job2["jobTitle"] = "Architekt";
job2["hourlySalary"] = 100;

let job3 = {};

job3["jobTitle"] = "Projektleiter";
job3["hourlySalary"] = 250;

let job4 = {};

job4["jobTitle"] = "Designer";
job4["hourlySalary"] = 100;

let job5 = {};

job5["jobTitle"] = "Fotograf";
job5["hourlySalary"] = 10;


//Erlaubt einen Login
const openPunch = () => {

    fetch(`${URL}/index.html`, {
        method: 'GET',
        headers: {
            'Authorization': bearerKey,
            'Content-Type': 'application/json'
        },

    })
};

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

    }).then((result) => {

    });
};

//Erstellt einen neuen Job
const createJobs = (job) => {

    fetch(`${URL}/jobs/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(job)

    })
};


//Erlaubt einen Login
const loginUser = () => {

    const credentialsLogin = {};
    credentialsLogin['username'] = document.getElementById("usernameField").value;
    credentialsLogin['password'] = document.getElementById("passwordField").value;
    selectedJob = document.getElementById("jobSpinner").value;

    fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentialsLogin)

    }).then((result) => {

        localStorage.setItem("savedUsername", credentialsLogin['username']);
        localStorage.setItem("savedJob", selectedJob);
        localStorage.setItem("JWT", result.headers.get("Authorization"));

        bearerKey = localStorage.getItem("JWT");
        // alert(localStorage.getItem("JWT"));

        location.href = 'http://localhost:8081/index.html';
    });

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
    createJobs(job1);
    createJobs(job2);
    createJobs(job3);
    createJobs(job4);
    createJobs(job5);

});