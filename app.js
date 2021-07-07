const express = require('express'); // importing express modules
const mongoose = require('mongoose');
const app = express();


// connect to mongoDB
const dbURI = 'mongodb+srv://ankit11hab:AnkitGuha@cluster0.uzilj.mongodb.net/AmazonData?retryWrites=true&w=majority'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) =>
{
  console.log("Database is connected");
})
.catch((error) =>
{
  console.log("An error has occured!");
})

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
    console.log("Server started on port 3000!");
})

