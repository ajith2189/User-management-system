
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.0");


//installing libraries
const express=require("express");
const app=express();
app.set('views', './views'); 
const bodyParser=require('body-parser');
const session=require('express-session');
const config = require("./config/config.js");
const auth=require("./middleware/auth.js");
const path = require('path');
const expresslayout  = require('express-ejs-layouts');
const nocache = require('nocache');


app.use(nocache());

app.use(session({
  name: 'sankar.sid',
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}));
app.use(expresslayout);



app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }))


//for user routes
const userRoute=require('./routes/userRoute.js');
app.use('/',userRoute)


//for admin routes
const adminRoute=require('./routes/adminRoute');
app.use('/admin',adminRoute)

app.listen(3005,()=>{
  console.log("server is running...")
});


