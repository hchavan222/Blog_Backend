const mon = require('mongoose')

mon.set('strictQuery' , false)


mon.connect("mongodb+srv://hrishi007:qwerty100@cluster0.rdpsxvx.mongodb.net/").then(()=>{
    console.log("connected to Mongoose") 
}).catch(()=>{
    console.log("Error while connecting to database")
})


