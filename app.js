const express = require("express");
const mongoose = require("mongoose");

const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes

const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

//Routes
app.get('/',(req, res) =>{
    res.send("Hello Atika");
});

//app.post for posting form data
//app.delete 

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }
    , ()=>{
        //process.env.DB_CONNECTION
    //, { useNewUrlParser: true }
       console.log('Conncected to DB')
    });


//Set port for server for listening
app.listen(3000);