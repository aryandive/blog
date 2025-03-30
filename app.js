require('dotenv').config();

const express = require('express')
const expresslayouts = require('express-ejs-layouts')

const connectDB = require('./server/config/db.js')

const app = express()
const port = 5000 || process.env.PORT
    
// connect to DB
connectDB();

app.use(express.static('public')) // static files

// templating Engine 
app.use(expresslayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main.js')) // Main Server

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})