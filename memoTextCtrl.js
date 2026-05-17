import { MemoBuilder } from './memoBuilder.js';
import { MemoLibrary } from './memoLibrary.js';

let memo_builder = new MemoBuilder();


function getContextList() {
    const contextFieldset = document.getElementById('ContextFieldset');
    const checkboxes = contextFieldset.querySelectorAll('input[type="checkbox"]');
    const selectedContexts = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedContexts.push(checkbox.value);
        }
    });

    console.log(`Selected contexts: ${selectedContexts.join(", ")}`);
    return selectedContexts;
}


function getContextKeysList() {
    const contextFieldset = document.getElementById('ContextFieldset');
    const checkboxes = contextFieldset.querySelectorAll('input[type="checkbox"]');
    const selectedContextKeys = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedContextKeys.push(checkbox.value);
        }
    });

    console.log(`Selected context keys: ${selectedContextKeys.join(", ")}`);
    return selectedContextKeys;
}


function updateMemoText() {
    const contactDropdown = document.getElementById('ContactDropdown');
    const eventDropdown = document.getElementById('EventDropdown');

    const memoTextElement = document.getElementById('MemoText');

    console.log(`Updating memo text with contactKey: ${contactDropdown.value}, eventKey: ${eventDropdown.value}, contextKeys: ${getContextKeysList()}`);
    if (contactDropdown.value) { memo_builder.contactKey = parseInt(contactDropdown.value); }
    if (eventDropdown.value) { memo_builder.eventKey = parseInt(eventDropdown.value); }
    let contextKeysList = getContextKeysList().map(key => parseInt(key));
    if (contextKeysList.length > 0) { memo_builder.contextKeys = contextKeysList; }

    memoTextElement.innerHTML = memo_builder.memo;  // applying changes to the memo text element
}

export { updateMemoText };