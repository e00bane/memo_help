const CONTACT_TEXTS = {0: 'CM', 1: 'NC', 2: 'SPS', 3: 'TP', 4: 'VM'};
const EVENT_TEXTS = {0: 'DISC', 1: 'XFR', 2: 'NA', 3: 'SIT', 4: 'INCOMPLETE', 5: 'LM', 6: 'NML'};
const CONTEXT_TEXTS = {0: 'CC', 1: 'RELATIVE', 2: 'WRONG#'};

const CONTACT_EVENT_LISTS = {
    0 : [0, 1],
    1 : [2, 3, 4],
    2 : [0, 1, 5, 6],
    3 : [5, 6],
    4 : [0, 2, 4]
}

const CONTACT_CONTEXT_LISTS = {
    0 : [0],
    3 : [1, 2]
}


function getDefaultDDElement() {
    const element = document.createElement('option');
    element.value = '';
    element.text = 'choose an option';
    return element;
}


function populateDropdown() {
    const dropdown = document.getElementById('memoDropdown');
    dropdown.innerHTML = ''; // Clear existing options

    dropdown.appendChild(getDefaultDDElement());
    for (const [contactKey, contactText] of Object.entries(CONTACT_TEXTS)) {
        const option = document.createElement('option');
        option.value = contactKey;
        option.text = contactText;
        dropdown.appendChild(option);
    }

    dropdown.addEventListener('change', function() {
        const selectedContact = this.value;
        populateEventDropdown(selectedContact);
        populateContextDropdown(selectedContact);
    });
}

// Minimal stubs so change handler won't throw if those dropdowns aren't implemented yet.
function populateEventDropdown(contactKey) {
    // Optional: implement event dropdown population. Left as a safe no-op for now.
}

function populateContextDropdown(contactKey) {
    // Optional: implement context dropdown population. Left as a safe no-op for now.
}

document.addEventListener('DOMContentLoaded', populateDropdown);
document.addEventListener('change', (e) => {
if (e.target && e.target.id === 'memoDropdown') {
    console.log('selected', e.target.value);
}
});