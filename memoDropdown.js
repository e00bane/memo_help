const CONTACT_TEXTS = {0: 'CM', 1: 'NC', 2: 'SPS', 3: 'TP', 4: 'VM'};
const EVENT_TEXTS = {0: 'DISC', 1: 'XFR', 2: 'NA', 3: 'SIT', 4: 'INCOMPLETE', 5: 'LM', 6: 'NML', 7: 'VMF', 8: 'VMNSU'};
const CONTEXT_TEXTS = {0: 'CC', 1: 'RELATIVE', 2: 'WRONG#'};
const CALL_TEXTS = {0: 'H1', 1: 'H2', 2: 'O1', 3: 'O2', 4: 'W1', 5: 'W2'};

const CONTACT_EVENT_LISTS = {
    0 : [0, 1],
    1 : [2, 3, 4],
    2 : [0, 1, 5, 6],
    3 : [5, 6],
    4 : [5, 6, 7, 8]  // VM
}

const CONTACT_CONTEXT_LISTS = {
    0 : [0],
    3 : [1, 2]
}


function getDefaultDDElement() {
    const element = document.createElement('option');
    element.value = '';
    element.text = '---';
    return element;
}


function populateContactDropdown() {
    const dropdown = document.getElementById('ContactDropdown');
    dropdown.innerHTML = ''; // Clear existing options

    // populate with contact options
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
    let eventDropdown = document.getElementById('EventDropdown');
    let key = parseInt(contactKey);

    let eventList = CONTACT_EVENT_LISTS[key] || [];

    eventDropdown.innerHTML = '';

    eventDropdown.appendChild(getDefaultDDElement());

    for (const eventKey of eventList) {
        const option = document.createElement('option');
        option.value = eventKey;
        option.text = EVENT_TEXTS[eventKey];
        eventDropdown.appendChild(option);
    }
}

function populateContextDropdown(contactKey) {
    let contextDropdown = document.getElementById('ContextDropdown');
    let key = parseInt(contactKey);

    let contextList = CONTACT_CONTEXT_LISTS[key] || [];

    contextDropdown.innerHTML = '';

    contextDropdown.appendChild(getDefaultDDElement());

    for (const contextKey of contextList) {
        const option = document.createElement('option');
        option.value = contextKey;
        option.text = CONTEXT_TEXTS[contextKey];
        contextDropdown.appendChild(option);
    }
}

function populateCallDropdown() {
    const dropdown = document.getElementById('CallDropdown');
    dropdown.innerHTML = ''; // Clear existing options

    // populate with call options
    dropdown.appendChild(getDefaultDDElement());
    for (const [callKey, callText] of Object.entries(CALL_TEXTS)) {
        const option = document.createElement('option');
        option.value = callKey;
        option.text = callText;
        dropdown.appendChild(option);
    }
}

// Initialize the dropdowns when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', populateContactDropdown);
document.addEventListener('DOMContentLoaded', populateCallDropdown);
