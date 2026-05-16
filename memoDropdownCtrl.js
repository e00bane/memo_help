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

        console.log(`Added contact option -> key: ${contactKey}, text: ${contactText}`);
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

        console.log(`Added event option for contact ${contactKey} -> key: ${eventKey}, text: ${MemoLibrary.EVENT_TEXTS[eventKey]}`);
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

        console.log(`Added context option for contact ${contactKey} -> key: ${contextKey}, text: ${MemoLibrary.CONTEXT_TEXTS[contextKey]}`);
    }
}


function initializeDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.innerHTML = ''; // Clear existing options

        // populate with default options
        dropdown.appendChild(getDefaultDDElement());
}


function showCheckboxes() {
    let checkboxes = document.getElementById("contextCheckboxes");
    checkboxes.style.display = "block";

    console.log('Context checkboxes shown');
}    

function hideCheckboxes() {
    let checkboxes = document.getElementById("contextCheckboxes");
    checkboxes.style.display = "none";

    console.log('Context checkboxes hidden');
}

function populateContextCheckboxes() {
    const checkboxesContainer = document.getElementById('contextCheckboxes');
    checkboxesContainer.innerHTML = ''; // Clear existing checkboxes

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4']; // Example options

    options.forEach((option, index) => {
        const label = document.createElement('label');
        label.setAttribute('for', `checkbox${index}`);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox${index}`;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));

        checkboxesContainer.appendChild(label);
    });
}

function checkboxesIsHidden() {
    let checkboxes = document.getElementById("contextCheckboxes");
    return checkboxes.style.display === "none" || checkboxes.style.display === "";
}

function toggleCheckboxes() {
    let checkboxes = document.getElementById("contextCheckboxes"); 
    if (checkboxes.style.display === "block") {
        hideCheckboxes();
    } else {
        showCheckboxes();
    }
}

function initializeDropdowns() {
    populateContactDropdown();
    
    initializeDropdown('EventDropdown');
    initializeDropdown('ContextDropdown');
    populateContextCheckboxes();

}

export { initializeDropdowns, showCheckboxes, hideCheckboxes, toggleCheckboxes, checkboxesIsHidden };