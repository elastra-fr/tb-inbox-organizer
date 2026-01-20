

import { logAccounts } from "./core/accounts.js";

console.log("tb-inbox-organizer loaded");

async function createSpace() {
  try {
    const spaces = await browser.spaces.query({ name: "inbox_organizer", isSelfOwned: true });
    if (spaces.length === 0) {
      await browser.spaces.create(
        "inbox_organizer",
        browser.runtime.getURL("ui/unread/unread.html"),
        {
          title: "Inbox Organizer",
          defaultIcons: "icons/icon.svg"
        }
      );
      console.log("Space created");
    }
  } catch (error) {
    console.error("Error creating space:", error);
  }
}

createSpace();

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed / reloaded");
  logAccounts().catch(error => console.error("Error in logAccounts:", error));
  
  browser.menus.create({
    id: "open-unread-tab",
    title: "Inbox Organizer",
    contexts: ["tools_menu"]
  });
});

browser.menus.onClicked.addListener((info) => {
  if (info.menuItemId === "open-unread-tab") {
    browser.tabs.create({ 
      url: browser.runtime.getURL("ui/unread/unread.html") 
    });
  }
});

browser.commands.onCommand.addListener((command) => {
  if (command === "open-unread") {
    browser.tabs.create({ 
      url: browser.runtime.getURL("ui/unread/unread.html") 
    });
  }
});
