// This script listens for messages but does not need to handle anything for this functionality.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command === 'copyDate') {
    // Content script does not need to do anything here directly,
    // as the background script handles clipboard operations.
  }
});
