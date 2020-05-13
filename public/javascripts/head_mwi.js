
window.googletag = window.googletag || {cmd: []};

googletag.cmd.push(function() {
    let slot = googletag.defineOutOfPageSlot(
        '/9621/m.aspworldtour/ondemand/homepage',          
            googletag.enums.OutOfPageFormat.INTERSTITIAL);
    
    if (slot) slot.addService(googletag.pubads());
    googletag.enableServices();
    // NOTE! Consider delaying until first div on page?
    googletag.display(slot);    
});
