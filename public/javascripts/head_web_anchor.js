
window.googletag = window.googletag || {cmd: []};

googletag.cmd.push(function() {
    let slot = googletag.defineOutOfPageSlot(
        '6075/christiantest.com/homepage',          
            googletag.enums.OutOfPageFormat.TOP_ANCHOR);
    
    if (slot) slot.addService(googletag.pubads());
    googletag.enableServices();
    // NOTE! Consider delaying until first div on page?
    googletag.display(slot);    
});
