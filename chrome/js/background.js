chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('cdnjs.cloudflare.com/ajax', 'cdn.css.net');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://cdnjs.cloudflare.com/*"
        ]
    },
    ["blocking"]
);
