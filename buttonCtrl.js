const COPY_BUTTON_TEXT = 'Copy Memo Text';

function start(){
    console.log("start() method started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}
function stop(){
    console.log("stop() method started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

async function copyMemoText() {
    const memoTextElement = document.getElementById('MemoText');
    const memoText = memoTextElement ? memoTextElement.innerText.trim() : '';

    if (!memoText) {
        console.warn('No memo text available to copy.');
        return;
    }

    try {
        await navigator.clipboard.writeText(memoText);
        console.log('Memo text copied to clipboard.');
    } catch (error) {
        const fallback = document.createElement('textarea');
        fallback.value = memoText;
        fallback.setAttribute('readonly', '');
        fallback.style.position = 'absolute';
        fallback.style.left = '-9999px';
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand('copy');
        document.body.removeChild(fallback);
        console.log('Memo text copied to clipboard using fallback.');
    } finally {
        const copyButton = document.getElementById('copyButton');
        if (copyButton) {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = COPY_BUTTON_TEXT;
            }, 2000);
        }
    }
}


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


// specific copy functions for each button
function h1CopyMemoText() {
    const callpointBtn = document.getElementById('h1CopyButton');
    copyMemoText(callpointBtn);
}
function h2CopyMemoText() {
    const callpointBtn = document.getElementById('h2CopyButton');
    copyMemoText(callpointBtn);
}
function o1CopyMemoText() {
    const callpointBtn = document.getElementById('o1CopyButton');
    copyMemoText(callpointBtn);
}
function o2CopyMemoText() {
    const callpointBtn = document.getElementById('o2CopyButton');
    copyMemoText(callpointBtn);
}
function w1CopyMemoText() {
    const callpointBtn = document.getElementById('w1CopyButton');
    copyMemoText(callpointBtn);
}
function w2CopyMemoText() {
    const callpointBtn = document.getElementById('w2CopyButton');
    copyMemoText(callpointBtn);
}