const express = require('express');
const app = express();
const App = require('./App');
const mongoose = require('mongoose');

//this is only for local___________________________________
/*const cors = require('cors');
app.use(cors());*/

const Auth = require('./Components/Authentication');
const AddRsources = require('./Components/AddResources');

app.use(express.json())
//app.use('/', App)
app.use('/', Auth);
app.use('/', AddRsources);

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

