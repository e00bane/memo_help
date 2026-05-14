import { MemoLibrary } from './memoLibrary.js';

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
    for (const [contactKey, contactText] of Object.entries(MemoLibrary.CONTACT_TEXTS)) {
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

    let eventList = MemoLibrary.CONTACT_EVENT_LISTS[key] || [];

    eventDropdown.innerHTML = '';

    eventDropdown.appendChild(getDefaultDDElement());

    for (const eventKey of eventList) {
        const option = document.createElement('option');
        option.value = eventKey;
        option.text = MemoLibrary.EVENT_TEXTS[eventKey];
        eventDropdown.appendChild(option);
    }
}

function populateContextDropdown(contactKey) {
    let contextDropdown = document.getElementById('ContextDropdown');
    let key = parseInt(contactKey);

    let contextList = MemoLibrary.CONTACT_CONTEXT_LISTS[key] || [];

    contextDropdown.innerHTML = '';

    contextDropdown.appendChild(getDefaultDDElement());

    for (const contextKey of contextList) {
        const option = document.createElement('option');
        option.value = contextKey;
        option.text = MemoLibrary.CONTEXT_TEXTS[contextKey];
        contextDropdown.appendChild(option);
    }
}

function initializeDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.innerHTML = ''; // Clear existing options

        // populate with default options
        dropdown.appendChild(getDefaultDDElement());
}

function initializeDropdowns() {
    populateContactDropdown();
    
    initializeDropdown('EventDropdown');
    initializeDropdown('ContextDropdown');
}

export { initializeDropdowns };