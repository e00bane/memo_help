function updateMemoText() {
    const contactDropdown = document.getElementById('ContactDropdown');
    const eventDropdown = document.getElementById('EventDropdown');
    const contextDropdown = document.getElementById('ContextDropdown');
    const callDropdown = document.getElementById('CallDropdown');

    const memoTextElement = document.getElementById('MemoText');

    const contactText = CONTACT_TEXTS[contactDropdown.value] || '';
    const eventText = EVENT_TEXTS[eventDropdown.value] || '';
    const contextText = CONTEXT_TEXTS[contextDropdown.value] || '';
    const callText = CALL_TEXTS[callDropdown.value] || '';

    const combinedText = `${callText} ${contactText} ${eventText} ${contextText}`.trim();
    memoTextElement.innerHTML = combinedText;
}



document.addEventListener('change', (e) => {
    if (e.target && ['ContactDropdown', 'EventDropdown', 'ContextDropdown', 'CallDropdown'].includes(e.target.id)) {
        updateMemoText();
    }
});