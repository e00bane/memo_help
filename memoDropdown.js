function populateDropdown() {
    const dropdown = document.getElementById('memoDropdown');
    dropdown.innerHTML = ''; // Clear existing options

    // Example memo data - replace with actual memo data
    const memos = [  // TODO: replace with actual memo data
        'memo'
    ];

    let count = 0;
    memos.forEach(memo => {
        const option = document.createElement('option');

        count++;
        option.value = count;

        option.textContent = memo;
        dropdown.appendChild(option);
    });
}