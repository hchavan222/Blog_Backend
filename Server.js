const ex = require('express')
const cors  = require('cors')

const brouter = require('./Route/Routess')


const app = ex()

app.use(cors())

app.use(ex.json())

const mon = require('mongoose')

mon.set('strictQuery' , false)


mon.connect("mongodb+srv://hrishi007:qwerty100@cluster0.rdpsxvx.mongodb.net/").then(()=>{
    console.log("connected to Mongoose") 
}).catch(()=>{
    console.log("Error while connecting to database")
})




app.use('/api/blog' , brouter)

app.use("/api" , (req,res)=>{
    res.send("hello World")
})


app.listen(9000 , (error)=>{
    console.log("app is running at port 9000")
})