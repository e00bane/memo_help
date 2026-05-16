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

        console.log(`Added contact option -> key: ${contactKey}, text: ${contactText}`);
    }

    dropdown.addEventListener('change', function() {
        const selectedContact = this.value;
        populateEventDropdown(selectedContact);
        promptCheckboxPopulate(selectedContact);
        // TODO: also trigger population of context checkboxes when contact changes, and make sure to clear those checkboxes if the default "---" option is selected to avoid confusion about which contexts are currently selected for the new contact.
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

        console.log(`Added event option for contact ${contactKey} -> key: ${eventKey}, text: ${MemoLibrary.EVENT_TEXTS[eventKey]}`);
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

}

export { initializeDropdowns };