chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === 'copyDate') {
      const currentDate = new Date().toLocaleDateString('en-US', {day: 'numeric', month: 'numeric', year: 'numeric'});
      const nameX = request.nameX;
      const clipboardText = `${nameX}; ${currentDate};`;
      
      navigator.clipboard.writeText(clipboardText).then(function() {
        console.log('Copied to clipboard:', clipboardText);
      }, function(err) {
        console.error('Unable to copy to clipboard.', err);
      });
    }
  });
  