import { MemoBuilder } from './memoBuilder.js';
import { MemoLibrary } from './memoLibrary.js';

let memo_builder = new MemoBuilder();

function updateMemoText() {
    const contactDropdown = document.getElementById('ContactDropdown');
    const eventDropdown = document.getElementById('EventDropdown');
    const contextDropdown = document.getElementById('ContextDropdown');

    const memoTextElement = document.getElementById('MemoText');

    memo_builder.contactKey = contactDropdown.value ? parseInt(contactDropdown.value) : null;
    memo_builder.eventKey = eventDropdown.value ? parseInt(eventDropdown.value) : null;
    memo_builder.contextKeys = contextDropdown.value ? parseInt(contextDropdown.value) : null;

    const contactText = MemoLibrary.CONTACT_TEXTS[contactDropdown.value] || '';
    const eventText = MemoLibrary.EVENT_TEXTS[eventDropdown.value] || '';
    const contextText = MemoLibrary.CONTEXT_TEXTS[contextDropdown.value] || '';

    const combinedText = `${contactText} ${eventText} ${contextText}`.trim();
    
    memoTextElement.innerHTML = combinedText;  // applying changes to the memo text element
}

export { updateMemoText };