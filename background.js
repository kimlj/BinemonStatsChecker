
//inject script when a tab opens

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //add script only when the page loads completely not on every cycle
    //discard the local urls, only on actual website
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)){
        //injecting the css files
        chrome.scripting.insertCSS({
            target: {tabId: tabId},
            files: ["style.css"]
        })
            .then(() => {
                console.log("INJECTED THE FOREGROUND STYLES.");
                //injecting the js files
                chrome.scripting.executeScript({
                    target: {tabId: tabId},
                    files: ["foreground.js"]
                })
                //do a promise 
                    .then(() => {
                    console.log("INJECTED THE FOREGROUND SCRIPT.");
                    })
            })    
            .catch(err => console.log(err));
    }
});