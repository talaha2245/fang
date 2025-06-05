const express = require('express');
const app = express();
require('dotenv').config();
const fetchRoutes = require('./routes/fetch.routes');
const rankingRoutes = require('./routes/ranks.routes');
const ConnectTodb = require('./config/db.connection');
ConnectTodb();


//middleware to parse urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));


//middleware to parse Json bodies
const cors = require('cors');
const { connect } = require('mongoose');
app.use(cors());
app.set("view engine","ejs")
app.use("/fetch",fetchRoutes);
app.use("/ranking",rankingRoutes);



// Import routes


app.get("/",(req,res)=>{
    res.send("hellow world")
})

const port = process.env.PORT || 3000;

//starting the server
app.listen(port, () => {
  console.log(`The website is running at http://localhost:${port}`);
});
