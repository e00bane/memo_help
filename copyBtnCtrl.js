import { Clipboard } from "./Clipboard.js";

async function copyMemoText(callpoint_btn_element) {

    const memoTextElement = document.getElementById('MemoText');
    const memoBody = memoTextElement ? memoTextElement.innerText.trim() : '';

    if (!memoBody) {
        console.warn('No memo text available to copy.');
        return;
    }

    const completeMemoText = `${callpoint_btn_element.innerText} ${memoBody}`;

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


function handleCopyButtonClick(buttonId) {
    const callpointBtn = document.getElementById(buttonId);

    // handle cases where the button might not be found or is already disabled to prevent errors and unintended behavior
    if (!callpointBtn) {
        console.warn(`Button with ID ${buttonId} not found.`);
        return;
    } 
    if (callpointBtn.disabled) {
        console.warn('Copy button is currently disabled. Please wait.');
        return;
    }  
    
    // Delegate disabling/enabling to `copyMemoText` so the button stays disabled
    // while the temporary "Copied!" label is visible.
    copyMemoText(callpointBtn);

    console.log(`Copied memo text to clipboard from button with ID ${buttonId}.`);

}

export { handleCopyButtonClick };