import { MemoLibrary } from './memoLibrary.js';
import { promptCheckboxPopulate } from './dropdownChechboxCtrlInterface.js';
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
        console.log(`Contact dropdown changed to ${selectedContact}. Updating event dropdown and context checkboxes accordingly.`);
        populateEventDropdown(selectedContact);
        promptCheckboxPopulate(selectedContact);
    });

    console.log(`Populated contact dropdown with contacts: ${Object.keys(MemoLibrary.CONTACT_TEXTS).join(", ")}`);
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

    console.log(`Populated event dropdown for contact ${contactKey} with events: ${eventList.join(", ")}`);
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

}


function appendToContactChangeHandler(handler) {
    const contactDropdown = document.getElementById('ContactDropdown');
    contactDropdown.addEventListener('change', handler);
}


function updateSharedMemoBuilder(sharedMemoBuilder) {
    const contactDropdown = document.getElementById('ContactDropdown');
    const selectedContact = parseInt(contactDropdown.value);
    sharedMemoBuilder.contactKey = selectedContact !== '' ? selectedContact : null;
    console.log(`Updated MemoBuilder contact key: ${sharedMemoBuilder.contactKey}`);

    const eventDropdown = document.getElementById('EventDropdown');
    const selectedEvent = parseInt(eventDropdown.value);
    sharedMemoBuilder.eventKey = selectedEvent !== '' ? selectedEvent : null;
    console.log(`Updated MemoBuilder event key: ${sharedMemoBuilder.eventKey}`);
}

export { initializeDropdowns, appendToContactChangeHandler, updateSharedMemoBuilder };