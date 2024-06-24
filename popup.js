document.addEventListener('DOMContentLoaded', function() {
    var nameXInput = document.getElementById('nameXInput');
    var savedNameDisplay = document.getElementById('savedName');
    var saveButton = document.getElementById('saveNameX');
    var copyButton = document.getElementById('copyTimestamp');
    
    // Load saved NameX from localStorage
    var savedNameX = localStorage.getItem('NameX');
    if (savedNameX) {
        savedNameDisplay.textContent = 'Saved Name: ' + savedNameX;
        nameXInput.value = savedNameX;
    }
    
    // Event listener for Save NameX button
    saveButton.addEventListener('click', function() {
        var nameX = nameXInput.value.trim();
        if (nameX) {
            localStorage.setItem('NameX', nameX);
            savedNameDisplay.textContent = 'Saved Name: ' + nameX;
        } else {
            alert('Please enter a valid NameX');
        }
    });
    
    // Event listener for Copy Timestamp button
    copyButton.addEventListener('click', function() {
        var nameX = nameXInput.value.trim() || localStorage.getItem('NameX') || "NameX"; // Use saved NameX or default to "NameX"
        
        var currentDate = new Date();
        var formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '.'); // Format DD.MM.YYYY
        
        var timestamp = nameX + ' ' + formattedDate;
        
        navigator.clipboard.writeText(timestamp).then(function() {
            console.log('Timestamp copied to clipboard');
        }, function(err) {
            console.error('Unable to copy timestamp: ', err);
        });
    });
});
