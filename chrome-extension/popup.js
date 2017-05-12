function runSwitchjs(checked_val) {
    // inject jquery
    chrome.tabs.executeScript(null,
        {file:"jquery.min.js"});
    // inject switch js with data
    chrome.tabs.executeScript(null, {
        // convert json data into variable string for passing
        code: 'var checked_value = '+ checked_val
    }, function() {
        chrome.tabs.executeScript(null, {file: 'switch.js'});
    });
}
$(function() {
    $(document).on('click', '#kesinlikle_katiliyorum', function() {
        runSwitchjs(0);
    });
    $(document).on('click', '#katiliyorum', function() {
        runSwitchjs(1);
    });
    $(document).on('click', '#katilmiyorum', function() {
        runSwitchjs(2);
    });
    $(document).on('click', '#kesinlikle_katilmiyorum', function() {
        runSwitchjs(3);
    });

    
});



