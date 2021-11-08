var mongoose=require('mongoose')
var schema =mongoose.Schema

var coursMschema = new mongoose.Schema({
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
        answer5 :  {
                type : String
        },
        question6 : {
                type : String
        },
        answer6 : {
                type : String
        },
        question7 : {
                type : String
        },
        answer7 : {
                type : String
        },
        question8 : {
                type : String
        },
        answer8 : {
                type : String
        },
        question9 : {
                type : String
        },
        answer9 : {
                type : String
        },
        questoin10 : {
                type : String
        },
        answer10 :{
                type : String
        }






},{timestamps: true})

const coursM =mongoose.model("coursM",coursMschema)
module.exports = coursM