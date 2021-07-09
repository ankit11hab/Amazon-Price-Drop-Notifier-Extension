/* chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
    $.ajax(
        {
            url: "http://localhost:3000/",
            data: { test: "test-data" },
            type: 'POST',
            success: (response) => {
                console.log("Response: ", response);
            },
            error: (response) => {
                console.log("Response: ", response);
            }
        }
    );
} */

console.log("Hi this is background js text!");

chrome.runtime.onMessage.addListener((response, sender, sendResponse)=>
{
    console.log(response);
});

