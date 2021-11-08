const TestM = require('../models/testM')
const index = (req, res, next) => {
    TestM.find()
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
    let testMID = req.body.testMID
    TestM.findById(testMID)
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
    let testM = new TestM({
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
        answerr5: req.body.answer5,
        question6: req.body.question6,
        answer6: req.body.answer6

    })
    testM.save()
   .then(response => 
    {
        res.json({
            message:'test intermidiaire Added Successfully'
        })

    })
    .catch(error => {
        res.json({
            message:'An error Occured!'
        })
    })
   
}
const update = (req, res, next) => {
    let testMID = req.body.testMID

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
        answerr5: req.body.answer5,
        question6: req.body.question6,
        answer6: req.body.answer6
    }
    TestM.findByIdAndUpdate(testMID, {$set: updatedData})
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
    let testMID = req.body.testMID
    TestM.findByIdAndRemove(testMID)
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