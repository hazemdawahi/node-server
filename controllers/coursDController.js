const CoursD = require('../models/coursD')
const index = (req, res, next) => {
    CoursD.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}
const show = (req, res, next) => {
    let coursDID = req.body.coursDID
    CoursD.findById(coursDID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
                   message: 'An error Occured'
 
        })
    })
}
const store = (req, res, next) => {
    let coursD = new CoursD({
        iduser: req.body.iduser,
        question: req.body.question,
        answer: req.body.answer,
        question2: req.body.question2,
        answer2: req.body.answer2,
        question3: req.body.question3,
        answer3: req.body.answer3,
        question4: req.body.question4,
        answer4: req.body.answer4,
        question5: req.body.question5,
        answer5: req.body.answer5,
        question6: req.body.question6,
        answer6: req.body.answer6,
        question7 : req.body.question7,
        answer7 : req.body.answer7,
        question8 : req.body.question8,
        answer8: req.body.answer8,
        question9: req.body.question9,
        answer9 : req.body.answer9,
        question10: req.body.question10,
        answer10 : req.body.answer10
    })
    coursD.save()
   .then(response => 
    {
        res.json({
            message:'coursD Added Successfully'
        })

    })
    .catch(error => {
        res.json({
            message:'An error Occured!'
        })
    })
   
}
const update = (req, res, next) => {
    let coursDID = req.body.coursDID

    let updatedData = {
        iduser: req.body.iduser,
        question: req.body.question,
        answer: req.body.answer,
        question2: req.body.question2,
        answer2: req.body.answer2,
        question3: req.body.question3,
        answer3: req.body.answer3,
        question4: req.body.question4,
        answer4: req.body.answer4,
        question5: req.body.question5,
        answer5: req.body.answer5,
        question6: req.body.question6,
        answer6: req.body.answer6,
        question7 : req.body.question7,
        answer7 : req.body.answer7,
        question8 : req.body.question8,
        answer8: req.body.answer8,
        question9: req.body.question9,
        answer9 : req.body.answer9,
        question10: req.body.question10,
        answer10 : req.body.answer10

    }
    CoursD.findByIdAndUpdate(coursDID, {$set: updatedData})
    .then(() => {
        res.json({
            message:'coursD updated successfully!'
        })
    })
.catch(error => {
    res.json({
        message:'An error Occured!'
    })
})

}
const destroy =(req, res, next) =>{
    let coursDID = req.body.coursDID
    CoursD.findByIdAndRemove(coursDID)
    .then(() => {
        res.json({
            message:'coursD deleted successfully!'
        })
    })
    .catch (error => {
        res.json({
            messaage:'An error Occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}