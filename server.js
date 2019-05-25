const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const items = require('./routes/api/items');




//middleware body-parser
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connected!'))
    .catch(err => console.log('error'));


//use routes
app.use('/api/items', items);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));



