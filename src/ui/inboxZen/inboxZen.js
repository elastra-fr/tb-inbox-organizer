//console.log("InboxZen page loaded");

// Minimal DOM hooks for future behaviour
document.addEventListener('DOMContentLoaded', () => {
    //console.log("Page prête");

    // Placeholder: attach a click handler to message items to show preview
    document.querySelectorAll('.message-item').forEach(item => {
        item.addEventListener('click', () => {
            const from = item.querySelector('.message-from')?.textContent || '';
            const subject = item.querySelector('.message-subject')?.textContent || '';
            const preview = document.querySelector('.preview-content');
            if (preview) {
                preview.innerHTML = `<h3>${subject}</h3><p>De: ${from}</p>`;
            }
        });
    });
});
