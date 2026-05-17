import { MemoLibrary } from './memoLibrary.js';
import { promptCheckboxPopulate } from './dropdownChechboxCtrlInterface.js';


function getDefaultDDElement() {
    const element = document.createElement('option');
    element.value = '';
    element.text = '---';
    return element;
}

function getSelectedContactKey() {
    const dropdown = document.getElementById('ContactDropdown');
    const selectedValue = dropdown.value;
    return (selectedValue !== '' && selectedValue != null) ? parseInt(selectedValue) : null;
}

function getSelectedEventKey() {
    const dropdown = document.getElementById('EventDropdown');
    const selectedValue = dropdown.value;
    return (selectedValue !== '' && selectedValue != null) ? parseInt(selectedValue) : null;
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
    const selectedContact = getSelectedContactKey();
    const selectedEvent = getSelectedEventKey();
    
    if(sharedMemoBuilder.contactKey != selectedContact) {  // if contact has changed, reset context keys in the MemoBuilder to prevent invalid contexts from being retained
        console.log(`Resetting context keys in MemoBuilder; Contact selection changed from ${sharedMemoBuilder.contactKey} to ${selectedContact}.`);
        sharedMemoBuilder.contextKeys = []; // reset context keys if contact changes
    }

    console.log(`Updating MemoBuilder's contact to ${selectedContact} based on dropdown selection.`);
    sharedMemoBuilder.contactKey = selectedContact;

    console.log(`Updating MemoBuilder's event to ${selectedEvent} based on dropdown selection.`);
    sharedMemoBuilder.eventKey = selectedEvent;
    
    console.log(`Updated MemoBuilder's contact and event.\ncurrent build: ${sharedMemoBuilder.memo}`);
}

export { initializeDropdowns, appendToContactChangeHandler, updateSharedMemoBuilder };