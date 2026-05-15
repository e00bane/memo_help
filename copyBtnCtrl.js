import { Clipboard } from "./Clipboard.js";

async function copyMemoText(callpoint_btn_element) {

    const memoTextElement = document.getElementById('MemoText');
    const memoBody = memoTextElement ? memoTextElement.innerText.trim() : '';

    if (!memoBody) {
        console.warn('No memo text available to copy.');
        return;
    }

    const completeMemoText = `${callpoint_btn_element.value} ${memoBody}`;

    callpoint_btn_element.disabled = true; // Disable the button to prevent multiple clicks

    await Clipboard.copyToClipboard(completeMemoText);

    if (callpoint_btn_element) {
        const originalText = callpoint_btn_element.textContent;
        callpoint_btn_element.textContent = 'Copied!';
        setTimeout(() => {
            callpoint_btn_element.textContent = originalText;
            // Re-enable the button only after the 'Copied!' label has been restored
            callpoint_btn_element.disabled = false;
        }, 2000);
    }
    
    console.log('Memo text copied to clipboard:', completeMemoText);
}


function getButtonElementById(buttonId) {
    // `buttonId` can be a string id, an Event, or an Element. Resolve to the actual <button> element.

    if (typeof buttonId === 'string') {
        return document.getElementById(buttonId);
    } else if (buttonId && buttonId.currentTarget) {
        // called with event
        return buttonId.currentTarget;
    } else if (buttonId && buttonId.target) {
        // called with event object but use closest in case a child (like a span) was clicked
        return buttonId.target.closest ? buttonId.target.closest('button') : null;
    } else if (buttonId instanceof Element) {
        return buttonId.closest ? (buttonId.closest('button') || buttonId) : buttonId;
    }

    return null; // Could not resolve to a button element
}


function handleCopyButtonClick(buttonId) {
    let callpointBtn = getButtonElementById(buttonId);

    // handle cases where the button might not be found or is already disabled to prevent errors and unintended behavior
    if (!callpointBtn) {
        console.warn('Copy button not found (resolved from argument):', buttonId);
        return;
    }
    // Helpful debug info about the resolved button
    console.log('Resolved copy button -> tag:', callpointBtn.tagName, 'name:', callpointBtn.name, 'id:', callpointBtn.id, 'value:', callpointBtn.value);
    if (callpointBtn.disabled) {
        console.warn('Copy button is currently disabled. Please wait.');
        return;
    }  
    
    copyMemoText(callpointBtn);
    console.log(`Copied memo text to clipboard from button with ID ${buttonId}.`);

}

export { handleCopyButtonClick };