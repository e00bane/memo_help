import { MemoBuilder } from './memoBuilder.js';
import { MemoLibrary } from './memoLibrary.js';

let memo_builder = new MemoBuilder();

const DEFAULT_MEMO_TEXT = "Select a contact and event to generate a memo.";

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


function initializeMemoText(){
    const memoTextElement = document.getElementById('MemoText');
    memoTextElement.innerHTML = DEFAULT_MEMO_TEXT;
}


function updateMemoText(sharedMemoBuilder) {
    const memoTextElement = document.getElementById('MemoText');

    let newMemoText = sharedMemoBuilder.memo || DEFAULT_MEMO_TEXT;  // get the current memo text from the builder
    memoTextElement.innerHTML = newMemoText;  // applying changes to the memo text element

   console.log(`Updated memo text: ${memoTextElement.innerHTML}`);

}

export { updateMemoText, initializeMemoText };