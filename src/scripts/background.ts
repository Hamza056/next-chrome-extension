// eslint-disable-next-line no-console
console.log("background script dsdsds");

chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((msg) => {
    // eslint-disable-next-line no-console
    console.log("Received message in background:", msg);
    port.postMessage({ response: "Message received in background script" });
  });
});
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // eslint-disable-next-line no-console
  console.log("Received message in background:", msg);
  sendResponse({ response: "test response" });
});
export {};
