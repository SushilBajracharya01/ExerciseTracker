const express = require('express');

const cors = require('cors');   //Express middleware that enables cors, Cross-origin resource sharing (CORS)
                                // allows AJAX requests to skip the Same-origin policy 
                                // and access resources from remote hosts.

const mongoose = require('mongoose');   //Mongoose is an Object Data Modeling (ODM) library.
                                        //mongoose helps us to connect to mongoDB, manage relationships between
                                        //data, provides schema validation, and is used to translate between objects
                                        //in code and the representation of those objects in MongooDb.




require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB database connection established successfully!");
})

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})
