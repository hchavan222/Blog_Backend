
const mon = require('mongoose')

const Blog = require("../Models/Blog")


const find = async(req,res)=>{
    let blogdata

    try{
        blogdata = await Blog.find()
    }catch(e){
        console.log("error occured")
    }

    if(!blogdata){
        return res.status(404).json({message:"No Blogs Found"})
    }

    return res.status(200).json({blogdata})
}


const add = async(req,res)=>{
    const {name , description} = req.body

    const currdate = new Date()

    const newdata = new Blog({
        name , description , date:currdate
    })

    try{
        await newdata.save()
    }catch(e){

        console.log(e)

    }

    try{
        const sess = await mon.startSession()
        sess.startTransaction()

        await newdata.save(sess)

        sess.commitTransaction()
    }
    catch(e){
        return res.status(500).json({message: "Error occured"})

    }

    return res.status(200).json({newdata})


}

const deleted = async (req,res)=>{

    const id = req.params.id
    console.log(id)

    try{
        const val = await Blog.findByIdAndDelete(id);
        console.log(val)

        if(!val){
            return res.status(404).json({message:"Data not Found"})
        }

        return res.status(200).json({message:"Deleted!!!"})
    }catch(e){
        return res.status(500).json({message:"Please retry"})
    }

}


const updated = async (req,res)=>{

    const id = req.params.id

    const {name, description} = req.body

    try{
        const val = await Blog.findByIdAndUpdate(id , { name , description

        });

        if(!val){
            return res.status(404).json({message:"Data not Found"})
        }

        return res.status(200).json({message:"Updated!!!"})
    }catch(e){
        return res.status(500).json({message:"Please retry"})
    }

}

module.exports = {find , add , deleted , updated}