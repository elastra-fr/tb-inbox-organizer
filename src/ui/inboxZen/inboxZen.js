//console.log("InboxZen page loaded");
import { listAccounts } from '../../core/accounts.js';

const mainContent = document.querySelector('.main-content');

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



if (mainContent) {

showAccounts();

}




});



const showAccounts = () => {

mainContent.innerHTML = '<h2>Loading accounts...</h2>';

listAccounts().then(accounts => {
    if (accounts.length === 0) {
        mainContent.innerHTML = '<h2>No accounts found.</h2>';
        return;
    }

    let html = '<h2>Inboxes</h2><ul class="account-list">';
    accounts.forEach(account => {

        

if (account.type !== 'local') {

    
        html += `<li class="account-item"><div class="account-header"><h3><strong>${account.name} <span class="unread-count">${account.unreadCount}</span></h3><span class="account-type">${account.type}</span></strong></div><ul>`;
        account.folders.forEach(folder => {
            html += `<li>${folder.name} - ${folder.path} (${folder.type}) - Messages: ${folder.messages}</li>`;
        });
        html += '</ul></li>';

    }


    });
    html += '</ul>';

    mainContent.innerHTML = html;       

}).catch(error => {
    console.error("Error displaying accounts:", error);
    mainContent.innerHTML = '<h2>Error loading accounts.</h2>';
});






};