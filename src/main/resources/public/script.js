const URL = 'http://localhost:8081';
let entries = [];
let findEntry = null;

/**
 *
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc Script
 */
const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

const createEntry = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("createEntryForm"));
    const entry = {};
    entry['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));


    fetch(`${URL}/entries`, {
        method: 'POST',
        headers: {
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
        method: 'GET'
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
        method: 'DELETE'
    }).then((result) => {
        indexEntries();

    });

    indexEntries();

}

//Lässt Eintrag bearbeiten
const editEntry = (entry) => {

   const formData = new FormData(document.getElementById("createEntryForm2"));
   const entryEdit = {};

   entryEdit['id'] = entry.id;
   entryEdit['checkIn'] = dateAndTimeToDate(formData.get('checkInDate2'), formData.get('checkInTime2'));
   entryEdit['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate2'), formData.get('checkOutTime2'));



    fetch(`${URL}/entries/${entry.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entryEdit)

    }).then((result) => {
        result.json().then((entry) => {
            entries = entries.map((e) => e.id === entry.id ? entry.id : e.id);
            renderEntries();
        });
    });

}

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const createActions = (entry) => {
    const cell = document.createElement('td');
    const deleteButton = document.createElement("button");
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => deleteEntry(entry.id))
    cell.appendChild(deleteButton);
    return cell;
}

//Zeigt Button und Formular an
const showButton = (entry) => {

    const formDataShow = new FormData(document.getElementById("createEntryForm2"));

    const checkInField =  document.getElementById('checkIn2').value=entry.checkIn.slice(0,10);
    const checkOutField =  document.getElementById('checkOut2').value=entry.checkOut.slice(0,10);


    const form2 = document.getElementById('createEntryForm2').style.display="block";
    const form = document.getElementById('createEntryForm').style.display="none";



    const subButton2 = document.getElementById('subButton2');
    subButton2.addEventListener('click', () => editEntry(entry));
}


const editActions = (entry) => {
    findEntry = entry;
    const cell = document.createElement('td');
    const editButton = document.createElement("button");
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', () => showButton(entry))
    cell.appendChild(editButton);
    return cell;
}



const renderEntries = () => {
    const form = document.getElementById('createEntryForm2').style.display="none";

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

document.addEventListener('DOMContentLoaded', function(){
    const createEntryFormButton = document.getElementById("subButton")

   // const createEntryForm2 = document.querySelector('#createEntryForm2');


   // createEntryForm2.addEventListener('submit', () => editEntry(findEntry));

   createEntryFormButton.addEventListener('click', createEntry);

    indexEntries();
});