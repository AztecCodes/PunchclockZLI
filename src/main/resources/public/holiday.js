//Variablen
const URL = 'http://localhost:8081';
let entries = [];
let findEntry = null;
let bearerKey = localStorage.getItem("JWT");


//Gibt Datum und Zeit zurück
const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

//Erstellt einen neuen Eintrag
const createEntry = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("createEntryForm"));
    const entry = {};
    entry['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));


    fetch(`${URL}/entries`, {
        method: 'POST',
        headers: {
            'Authorization': bearerKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        result.json().then((entry) => {
            entries.push(entry);
            renderEntries();
        });
    });
};