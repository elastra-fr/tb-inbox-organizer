export async function listAccounts() {
    try{
        const accounts = await browser.accounts.list();
        const result = accounts.map(account => ({
            id: account.id,
            name: account.name,
            type: account.type,
            folders: (account.folders || []).map(folder => ({
                name: folder.name,
                path : folder.path,
                type: folder.type,
                messages: folder.messages ? folder.messages.length : 0
            }))
        }));
        return result;

    } catch (error) {
        console.error("Error listing accounts:", error);
        return [];
    }
}


export async function logAccounts() {
    const accounts = await listAccounts();
accounts.forEach(account => {
    console.log(`Account: ${account.name} (Type: ${account.type}, ID: ${account.id})`);
    account.folders.forEach(folder => {
        console.log(`  Folder: ${folder.name} (Path: ${folder.path}, Type: ${folder.type}, Messages: ${folder.messages})`);
    });

});
}
