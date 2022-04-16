const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
//import route
const authRoute = require('./route/auth')
const postRoute = require('./route/post')

dotenv.config();
const PORT = process.env.PORT || 8000
//connect to db 
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },
    () => console.log("connect the db"))

//middlewares 
app.use(express.json());

//Route middlewares 
app.use('/api/user',authRoute)
app.use('/api/post', postRoute)   

app.listen(PORT,()=>console.log(`Serever running on http://localhost:${PORT}`))