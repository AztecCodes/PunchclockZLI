//Variablen
const URL = 'http://localhost:8081';
let entries = [];
let findEntry = null;
let bearerKey = localStorage.getItem("JWT");

/**
 *
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc Script
 */

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

//Zeigt Einträge an
const indexEntries = () => {
    fetch(`${URL}/entries`, {
        method: 'GET',
        headers: {
            'Authorization': bearerKey,
        },
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
            renderEntries();
        });
    });
    renderEntries();
};

//Lässt Eintrag löschen
const deleteEntry = (id) => {
    fetch(`${URL}/entries/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': bearerKey,
        },
    }).then((result) => {
        indexEntries();

    });

    indexEntries();

}

//Lässt Eintrag bearbeiten
const editEntry = (entry) => {

    let formData = new FormData(document.getElementById("createEntryForm2"));
    let entryEdit = {};
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


    entryEdit['id'] = entry.id;
    entryEdit['checkIn'] = dateAndTimeToDate(formData.get('checkInDate2'), formData.get('checkInTime2'));
    entryEdit['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate2'), formData.get('checkOutTime2'));

    let beginString = entryEdit['checkIn'];
    let beginStringOut = entryEdit['checkOut'];

    //TODO Fix Edit

    /*
    // For CheckIn
    parts = beginString.split("T");
    tempString = parts[1];
    tempString2 = tempString.split(":");
    tempString3 = tempString2[0];
    endString = parseInt(tempString3 + 2);

    entryEdit['checkIn'] =  entryEdit['checkIn'].slice(0, 11) +
        endString + ":"
        +
        entryEdit['checkIn'].slice(14,  24);

    //For CheckOut
    partsOut = beginStringOut.split("T");
    tempStringOut = partsOut[1];
    tempStringOut2 = tempStringOut.split(":");
    tempStringOut3 = tempStringOut2[0];
    endStringOut = parseInt(tempStringOut3 + 2);

    entryEdit['checkOut'] =  entryEdit['checkOut'].slice(0, 11) +
        endStringOut + ":"
        +
        entryEdit['checkOut'].slice(14,  24);


     */

    fetch(`${URL}/entries/${entry.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': bearerKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entryEdit)

    }).then((result) => {
        location.href = 'http://localhost:8081/index.html';

        result.json().then((entryEdit) => {

            entries = entries.map((e) => e.id === entryEdit.id ? entryEdit.id : e.id);

            indexEntries();

        });
    });

}

//Erstellt eine Tabellenreihe
const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

//Erstellt den "Delete"-Button
const createActions = (entry) => {
    const cell = document.createElement('td');
    const deleteButton = document.createElement("button");
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteEntry(entry.id))
    cell.appendChild(deleteButton);
    return cell;
}

//Zeigt Button und Formular an und füllt in das Formular dabei automatisch die akutellen Werte
const showButton = (entry) => {

    const checkInField = document.getElementById('checkIn2').value = entry.checkIn.slice(0, 10);
    const checkOutField = document.getElementById('checkOut2').value = entry.checkOut.slice(0, 10);

    const checkInTime = document.getElementById('checkInTime2').value = entry.checkIn.slice(11,);
    const checkOutTime = document.getElementById('checkOutTime2').value = entry.checkOut.slice(11,);

    const form2 = document.getElementById('createEntryForm2').style.display = "block";
    const form = document.getElementById('createEntryForm').style.display = "none";

    const subButton2 = document.getElementById('subButton2');
    subButton2.addEventListener('click', () => editEntry(entry));
}

//Zeigt "Edit"-Button an
const editActions = (entry) => {
    findEntry = entry;
    const cell = document.createElement('td');
    const editButton = document.createElement("button");
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => showButton(entry))
    cell.appendChild(editButton);
    return cell;
}

//Rendert alle Werte
const renderEntries = () => {

    const form = document.getElementById('createEntryForm2').style.display = "none";
    const display = document.querySelector('#entryDisplay');
    display.innerHTML = '';
    entries.forEach((entry) => {
        const row = document.createElement('tr');

        row.appendChild(createCell(entry.id));
        row.appendChild(createCell(new Date(entry.checkIn).toLocaleString()));
        row.appendChild(createCell(new Date(entry.checkOut).toLocaleString()));
        row.appendChild(createActions(entry));
        row.appendChild(editActions(entry));

        display.appendChild(row);
    });
};

//Event-Listener bei Laden vom Dokument
document.addEventListener('DOMContentLoaded', function () {
    const createEntryFormButton = document.getElementById("subButton")
    createEntryFormButton.addEventListener('click', createEntry);

    indexEntries();
});