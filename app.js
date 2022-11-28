const express= require('express');
const app=express();
const mongoose= require('mongoose')
const bodyParser=require('body-parser')
require('dotenv/config')



//connect to db
mongoose.connect(process.env.DB_URI,{useNewUrlParser: true},()=>{console.log("Connected")});
app.listen(process.env.PORT || 3000)

app.use(bodyParser.json());

//import routes
const postsRoute=require('./routes/errors')
app.use('/errors',postsRoute);

app.get('/',(req,res)=>{
    res.send("We are home");
}
);



