function runSwitchjs(checked_val) {
    chrome.tabs.executeScript(null,
        {file:"jquery.min.js"});
    chrome.tabs.executeScript(null, {
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
