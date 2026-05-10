async function copyMemoText(callpoint_btn_element) {

    const memoTextElement = document.getElementById('MemoText');
    const memoBody = memoTextElement ? memoTextElement.innerText.trim() : '';

    if (!memoBody) {
        console.warn('No memo text available to copy.');
        return;
    }

    const completeMemoText = `${callpoint_btn_element.innerText} ${memoBody}`;

    try {
        callpoint_btn_element.disabled = true; // Disable the button to prevent multiple clicks

        await navigator.clipboard.writeText(completeMemoText);
        console.log('Memo text copied to clipboard.');
    } catch (error) {
        const fallback = document.createElement('textarea');
        fallback.value = completeMemoText;
        fallback.setAttribute('readonly', '');
        fallback.style.position = 'absolute';
        fallback.style.left = '-9999px';
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand('copy');
        document.body.removeChild(fallback);
        console.log('Memo text copied to clipboard using fallback.');
    } finally {
        if (callpoint_btn_element) {
            const originalText = callpoint_btn_element.textContent;
            callpoint_btn_element.textContent = 'Copied!';
            setTimeout(() => {
                callpoint_btn_element.textContent = originalText;
            }, 2000);
        }

        callpoint_btn_element.disabled = false; // Re-enable the button after the operation
    }
}


function handleCopyButtonClick(buttonId) {
    const callpointBtn = document.getElementById(buttonId);
    if (callpointBtn) {
        copyMemoText(callpointBtn);
    } else {
        console.warn(`Button with ID ${buttonId} not found.`);
    }
}