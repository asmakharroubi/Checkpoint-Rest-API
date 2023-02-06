const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(require("./routes/index"))

mongoose.connect("mongodb://127.0.0.1:27017/User").then(()=>console.log("DB IS CONNECTED")).catch((err)=>console.log(err))

app.listen(PORT, ()=>console.log(`SERVER IS RUNNING ON PORT ${PORT}`))

