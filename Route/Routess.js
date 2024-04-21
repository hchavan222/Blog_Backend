const ex = require("express")

const brouter = ex.Router()


const {find , add, deleted , updated} = require("../Controller/Controller")

brouter.get("/" ,  find)

brouter.post("/add" , add)

brouter.put("/update/:id" , updated)

brouter.delete("/delete/:id" , deleted)


module.exports = brouter

