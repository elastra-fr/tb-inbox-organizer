console.log("tb-inbox-organizer loaded");

browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed / reloaded");
});
