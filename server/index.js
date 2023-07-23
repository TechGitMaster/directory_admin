const express = require('express');
const app = express();
const App = require('./App');
const mongoose = require('mongoose');


//1. This is just for second option if header in vercel.json have an error when uploading to vercel________________________
//2. Also delete "headers" in vercel.json if have an error when uploading to vercel________________________
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'https://thesisary-admin.vercel.app']
}));

// Set up options response for preflight requests
//app.options('*', cors());

app.use(express.json())
app.use('/', App)


const database = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, 
            { useNewUrlParser: true, useUnifiedTopology: true });
    }catch(err){
        console.error(err);
    }
}
database();

//this is only for local___________________________________
/*mongoose.connection.once('open', () => { 
    app.listen(4000 || process.env.PORT)    
});*/


//this is only for vercel__________________________________
module.exports = app

