/**
 * JavaScript für Ferienantrag
 */

//Variablen
const URL = 'http://localhost:8081';
let requests = [];
let findRequest = null;
let bearerKey = localStorage.getItem("JWT");
let findUser = "";


//Gibt Datum und Zeit zurück
const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

//Erstellt einen neuen Eintrag
const createRequest = () => {

    const formData = new FormData(document.getElementById("holidayForm"));
    const request = {};

    request['location'] = document.getElementById("location").value;
    request['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    request['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));
    request['paid'] = document.getElementById("paid").value;


    fetch(`${URL}/holidayrequests`, {
        method: 'POST',
        headers: {
            'Authorization': bearerKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    }).then((result) => {
        result.json().then((entry) => {
            requests.push(entry);
            renderRequests();
        });
    });
};


//Lässt Eintrag bearbeiten
const editRequest = (request) => {

    let formData = new FormData(document.getElementById("holidayForm2"));
    let formEdit2 = {};
    let tempString = "";
    let tempString2 = "";
    let tempString3 = "";
    let tempStringOut = "";
    let tempStringOut2 = "";
    let tempStringOut3 = "";
    let parts = "";
    let partsOut = "";
    let endString = "";
    let endStringOut = "";


    formEdit2['location'] = request.location;
    formEdit2['checkIn'] = dateAndTimeToDate(formData.get('checkIn2'), formData.get('checkInTime2'));
    formEdit2['checkOut'] = dateAndTimeToDate(formData.get('checkOut2'), formData.get('checkOutTime2'));
    formEdit2['paid'] = request.paid;


    let beginString = formEdit2['checkIn'];
    let beginStringOut = formEdit2['checkOut'];


    fetch(`${URL}/holidayrequests/${request.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': bearerKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formEdit2)

    }).then((result) => {
        location.href = 'http://localhost:8081/holiday.html';

        result.json().then((formEdit2) => {

            requests = requests.map((e) => e.id === formEdit2.id ? formEdit2.id : e.id);

            indexEntries();

        });
    });

}

//Zeigt "Edit"-Button an
const editActions = (request) => {
    findRequest = request;
    const cell = document.createElement('td');
    const editButton = document.createElement("button");
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => showButton(request))
    cell.appendChild(editButton);
    return cell;
}

//Zeigt Button und Formular an und füllt in das Formular dabei automatisch die akutellen Werte
const showButton = (request) => {

    const checkInField = document.getElementById('checkIn2').value = request.checkIn.slice(0, 10);
    const checkOutField = document.getElementById('checkOut2').value = request.checkOut.slice(0, 10);

    const checkInTime = document.getElementById('checkInTime2').value = request.checkIn.slice(11);
    const checkOutTime = document.getElementById('checkOutTime2').value = request.checkOut.slice(11);

    const form2 = document.getElementById('holidayForm2').style.display = "block";
    const form = document.getElementById('holidayForm').style.display = "none";

    const requestButton2 = document.getElementById('holidayRequest2');
    requestButton2.addEventListener('click', () => editRequest(request));
}

//Rendert alle Werte
const renderRequests = () => {

    //  const form = document.getElementById('holidayForm').style.display = "none";
    const display = document.querySelector('#requestDisplay');
    display.innerHTML = '';
    requests.forEach((request) => {
        const row = document.createElement('tr');

        row.appendChild(createCell(request.location));
        row.appendChild(createCell(new Date(request.checkIn).toLocaleString()));
        row.appendChild(createCell(new Date(request.checkOut).toLocaleString()));
        row.appendChild(createCell(request.paid));
        //    row.appendChild(editActions(request));

        display.appendChild(row);
    });
};

//Zeigt Einträge an
const indexRequests = () => {
    fetch(`${URL}/holidayrequests`, {
        method: 'GET',
        headers: {
            'Authorization': bearerKey,
        },
    }).then((result) => {
        result.json().then((result) => {
            requests = result;
            renderRequests();
        });
    });
    renderRequests();
};

//Erstellt eine Tabellenreihe
const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

//Event-Listener bei Laden vom Dokument
document.addEventListener('DOMContentLoaded', function () {
    const requestFormButton = document.getElementById("holidayRequest")
    requestFormButton.addEventListener('click', createRequest);

    const form2 = document.getElementById('holidayForm2').style.display = "none";
    const form = document.getElementById('holidayForm').style.display = "block";
    indexRequests();
});