var mongoose=require('mongoose')
var schema =mongoose.Schema

var coursDschema = new mongoose.Schema({
        iduser : {
                type : Number
        },
        question :  {
                type : String
        },
        answer :  {
                type : String
        },
        question2 : {
                type : String
        },
        answer2:  {
                type : String
        },
        question3 : {
                type : String
        },
        answer3 : {
                type : String
        },
        
        question4 : {
                type : String
        },
        answer4 : {
                type : String
        },
        question5 : {
                type : String
        },
        answer5 : {
                type : String
        }



},{timestamps: true})

const coursD =mongoose.model("coursD",coursDschema)
module.exports = coursD