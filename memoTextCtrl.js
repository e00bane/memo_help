import { MemoLibrary } from './memoLibrary.js';

function updateMemoText() {
    const contactDropdown = document.getElementById('ContactDropdown');
    const eventDropdown = document.getElementById('EventDropdown');
    const contextDropdown = document.getElementById('ContextDropdown');

    const memoTextElement = document.getElementById('MemoText');

    const contactText = MemoLibrary.CONTACT_TEXTS[contactDropdown.value] || '';
    const eventText = MemoLibrary.EVENT_TEXTS[eventDropdown.value] || '';
    const contextText = MemoLibrary.CONTEXT_TEXTS[contextDropdown.value] || '';

    const combinedText = `${contactText} ${eventText} ${contextText}`.trim();
    
    memoTextElement.innerHTML = combinedText;  // applying changes to the memo text element
}

export { updateMemoText };