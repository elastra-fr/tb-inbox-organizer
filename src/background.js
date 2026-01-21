

import { logAccounts } from "./core/accounts.js";

//console.log("tb-inbox-organizer loaded");

let spaceId = null;

// Créate a space for the extension UI
async function createSpace() {
  try {
    
    const existingSpaces = await browser.spaces.query({ name: "inbox_organizer", isSelfOwned: true });
    for (const space of existingSpaces) {
      await browser.spaces.remove(space.id);
      //console.log("Old space removed");
    }
    
 
    const space = await browser.spaces.create(
      "inbox_organizer",
      browser.runtime.getURL("ui/inboxZen/inboxZen.html"),
      {
        title: "Inbox Organizer",
        defaultIcons: "icons/icon.svg"
      }
    );
    spaceId = space.id;
    console.log("Space created:", spaceId);
    
    /*const allSpaces = await browser.spaces.query({});
    console.log("All spaces after creation:", allSpaces);
    const mySpace = allSpaces.find(s => s.id === spaceId);
    console.log("My space details:", mySpace);*/
  } catch (error) {
    console.error("Error creating space:", error);
  }
}

createSpace();

// Debug: list all spaces
/*browser.spaces.query({}).then(spaces => {
  console.log("All spaces:", spaces);
});*/

browser.runtime.onInstalled.addListener(() => {
  //console.log("Extension installed / reloaded");
  logAccounts().catch(error => console.error("Error in logAccounts:", error));
});
