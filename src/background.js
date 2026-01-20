

import { logAccounts } from "./core/accounts.js";

console.log("tb-inbox-organizer loaded");

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed / reloaded");
  logAccounts().catch(error => console.error("Error in logAccounts:", error));
});
