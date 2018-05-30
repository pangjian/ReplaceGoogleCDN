chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('ajax.googleapis.com', 'ajax.loli.net');
        url = url.replace('fonts.googleapis.com', 'fonts.loli.net')
        url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        url = url.replace('cdnjs.cloudflare.com', 'cdnjs.loli.net')
        url = url.replace('gravatar.com', 'gravatar.loli.net')
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://fonts.googleapis.com/*",
            "*://themes.googleusercontent.com/*",
            "*://cdnjs.cloudflare.com/*",
            "*://*.gravatar.com/*"

        ]
    },
    ["blocking"]
);
