const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    cost: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestampes: true})

module.exports = mongoose.model('Expense', expenseSchema)

