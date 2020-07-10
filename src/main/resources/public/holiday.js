//Variablen
const URL = 'http://localhost:8081';
let requests = [];
let findRequest = null;
let bearerKey = localStorage.getItem("JWT");


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
        //    row.appendChild(editActions(entry));

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

    indexRequests();
});