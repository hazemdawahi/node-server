var mongoose=require('mongoose')
var schema =mongoose.Schema

var userschema = new mongoose.Schema({
        name : {
                type:String
        },
        email :{
                type: String
        },
        password : {
                type: String
        },
        role :{
                type: String
        },
        date: {
              type: String  
        } ,
        niveau : {
                type: Number
        } ,
        langue :{
                type: String
        }



},{timestamps: true})


const user =mongoose.model("user",userschema)
module.exports = user