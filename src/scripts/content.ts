// You may need to use relative path import.
// import { } from "../constants";

// eslint-disable-next-line no-console
console.log("content script fdfdf");

// If you want to get the DOM of the open page, you can do it here.
// document.querySelector("#some-id");

// wait sendMessage
// eslint-disable-next-line
// @ts-ignore
window.myextension = {
  sendMessage: (message: any, callback?: (response: any) => void) => {
    chrome.runtime.sendMessage(message, callback);
  },
};

// Add listener for messages from the background script
// eslint-disable-next-line
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // eslint-disable-next-line
  console.log("Received message in content script:", msg);
});

// Example: Send a test message to the background script
// eslint-disable-next-line
// @ts-ignore
window.myextension.sendMessage({ message: "test" }, (response) => {
  // eslint-disable-next-line
  console.log("Response from background:", response);
});
export {};
