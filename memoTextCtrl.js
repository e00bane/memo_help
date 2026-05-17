import { MemoBuilder } from './memoBuilder.js';
import { MemoLibrary } from './memoLibrary.js';

let memo_builder = new MemoBuilder();


function getCheckedContextKeysList() {
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

    console.log(`Updating memo text with contactKey: ${contactDropdown.value}, eventKey: ${eventDropdown.value}, contextKeys: ${getCheckedContextKeysList()}`);
    memo_builder.contactKey = contactDropdown.value !== '' ? parseInt(contactDropdown.value) : null;
    memo_builder.eventKey = eventDropdown.value !== '' ? parseInt(eventDropdown.value) : null;
    let contextKeysList = getCheckedContextKeysList().map(key => parseInt(key));
    memo_builder.contextKeys = contextKeysList;

    memoTextElement.innerHTML = memo_builder.memo;  // applying changes to the memo text element

   console.log(`Updated memo text: ${memoTextElement.innerHTML}`);

}

export { updateMemoText };