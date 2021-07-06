const express = require('express'); // importing express modules
const app = express();

app.get("/", (request,response)=>
{
  response.send("Oye Aa gya mai!")
});

app.post("/", (request, response) => {
  console.log("req.body in save-products route: ", request.body);
  response.send("jai hind!");
});

app.listen(3000, function()
{
    console.log("Server started on port 3000!");
})

