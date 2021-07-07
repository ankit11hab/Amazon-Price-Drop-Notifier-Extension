const express = require('express'); // importing express modules
const app = express();

app.get("/", (request,response)=>
{
  response.send("This is a 'Get' response from app.js")
});

app.post("/", (request, response) => {
  console.log("req.body in save-products route: ", request.body);
  response.send("This is a 'Post' response from app.js'");
});

app.listen(3000, function()
{
    console.log("Server started at port 3000! (Console log through listen function)");
})

