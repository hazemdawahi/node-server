var mongoose=require('mongoose')
var schema =mongoose.Schema

var testDshema = new mongoose.Schema({
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
        answer2 :  {
                type : String
        },
     
        question3 : {
                type : String
        },
        answer3 : {
                type : String
        }
      
        





},{timestamps: true})

const testD =mongoose.model("testD",testDshema)
module.exports = testD