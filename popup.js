document.addEventListener('DOMContentLoaded', function() {
    var nameXInput = document.getElementById('nameXInput');
    var copyButton = document.getElementById('copyTimestamp');

    // Load saved NameX from chrome.storage
    chrome.storage.local.get(['NameX'], function(result) {
        if (result.NameX) {
            nameXInput.value = result.NameX;
        }
    });

    // Event listener for Copy Timestamp button
    copyButton.addEventListener('click', function() {
        var nameX = nameXInput.value.trim() || "NameX";
        
        // Save NameX to chrome.storage
        chrome.storage.local.set({ NameX: nameX }, function() {
            console.log('NameX saved to storage:', nameX);
        });

        var currentDate = new Date();
        var formattedDate = currentDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.'); // Format DD.MM.YYYY
        var timestamp = nameX + '; ' + formattedDate + ':' + ' ';
        navigator.clipboard.writeText(timestamp).then(function() {
            console.log('Timestamp copied to clipboard');
        }, function(err) {
            console.error('Unable to copy timestamp: ', err);
        });
    });
});
