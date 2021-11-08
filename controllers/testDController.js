const TestD = require('../models/testD')
const index = (req, res, next) => {
    TestD.find()
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
    let testDID = req.body.testDID
    TestD.findById(testDID)
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
    let testD = new TestD({
        iduser: req.body.iduser,
        question: req.body.question,
        answer: req.body.answer,
        question2: req.body.question2,
        answer2: req.body.answer2,
        question3: req.body.question3,
        answer3: req.body.answer3

    })
    testD.save()
   .then(response => 
    {
        res.json({
            message:'test debutant Added Successfully'
        })

    })
    .catch(error => {
        res.json({
            message:'An error Occured!'
        })
    })
   
}
const update = (req, res, next) => {
    let testDID = req.body.testDID

    let updatedData = {
        iduser: req.body.iduser,
        question: req.body.question,
        answer: req.body.answer,
        question2: req.body.question2,
        answer2: req.body.answer2,
        question3: req.body.question3,
        answer3: req.body.answer3
    }
    TestD.findByIdAndUpdate(testDID, {$set: updatedData})
    .then(() => {
        res.json({
            message:'test updated successfully!'
        })
    })
.catch(error => {
    res.json({
        message:'An error Occured!'
    })
})

}
const destroy =(req, res, next) =>{
    let testDID = req.body.testDID
    TestD.findByIdAndRemove(testDID)
    .then(() => {
        res.json({
            message:'test deleted successfully!'
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