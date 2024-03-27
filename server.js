const express = require('express')
const app = express()
const newAddRoute = require('./routes/newAddroute')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//readall
app.use('/22',newAddRoute)
//readbyid
//create

//update

//delete


app.listen(8000,()=>{
    console.log(`Node API app is running on port 8000`)
})