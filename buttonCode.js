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