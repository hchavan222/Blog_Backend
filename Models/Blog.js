
const mon = require('mongoose')
const BlogSchema = new mon.Schema({
    name:{
        type: String,
        required : true
    },

    description:{
        type: String,
        required: true,
        maxlength : 500
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mon.model("Blog" , BlogSchema)