function updateMemoText() {
    const contactDropdown = document.getElementById('ContactDropdown');
    const eventDropdown = document.getElementById('EventDropdown');
    const contextDropdown = document.getElementById('ContextDropdown');

    const memoTextElement = document.getElementById('MemoText');

    const contactText = CONTACT_TEXTS[contactDropdown.value] || '';
    const eventText = EVENT_TEXTS[eventDropdown.value] || '';
    const contextText = CONTEXT_TEXTS[contextDropdown.value] || '';

    const combinedText = `${contactText} ${eventText} ${contextText}`.trim();
    
    memoTextElement.innerHTML = combinedText;  // applying changes to the memo text element
}