window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
    googletag.defineSlot('/9621/m.aspworldtour/ondemand/homepage', {
        'fixed': [[300, 250], [336, 280], [320, 50]],
        'min': [200, 50],
        'max': [970, 250],
      }, 'divC')
           .addService(googletag.pubads());

  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});