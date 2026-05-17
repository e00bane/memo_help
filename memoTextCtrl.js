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


function updateMemoText() {  // TODO: refactor to incorporate changes to the dropdowns and checkboxes, and make sure to handle cases where some of those fields might not have a selected value to avoid showing "undefined" in the memo text when only some of the fields are selected.
    const contactDropdown = document.getElementById('ContactDropdown');
    const eventDropdown = document.getElementById('EventDropdown');
    //const contextDropdown = document.getElementById('ContextDropdown');

    const memoTextElement = document.getElementById('MemoText');

    console.log(`Updating memo text with contactKey: ${contactDropdown.value}, eventKey: ${eventDropdown.value}, contextKeys: ${getContextKeysList()}`);
    memo_builder.contactKey = contactDropdown.value ? parseInt(contactDropdown.value) : null;
    if (eventDropdown.value) {memo_builder.eventKey = parseInt(eventDropdown.value);}
    memo_builder.contextKeys = getContextKeysList();
    const combinedText =memo_builder.memo;
    
    memoTextElement.innerHTML = combinedText;  // applying changes to the memo text element
}

export { updateMemoText };