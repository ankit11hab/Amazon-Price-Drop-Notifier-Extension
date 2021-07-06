$.ajax(
    {
        url: "http://localhost:3000/",
        data: {test: "test-data"},
        type: 'POST',
        success: (response)=>
        {
            console.log("Response: ", response);
        },
        error: (response)=>
        {
            console.log("Response: ", response);
        }
    }
);