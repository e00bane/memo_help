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


function populateDropdown() {
    const dropdown = document.getElementById('memoDropdown');
    dropdown.innerHTML = ''; // Clear existing options


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