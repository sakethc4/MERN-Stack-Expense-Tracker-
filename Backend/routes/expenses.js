const express = require('express')
const Expense = require('../models/expensesModel')
const router = express.Router()
const {
    createExpense, 
    getExpenses,
    getExpense,
    deleteExpense,
    updateExpense
} = require('../controllers/expenseController')

//gets all expenses
router.get('/', getExpenses)

//gets single expense
router.get('/:id', getExpense)

//post a new expense
router.post('/', createExpense)


//delete a expense
router.delete('/:id', deleteExpense)

//Update a expense 
router.patch('/:id', updateExpense)


module.exports = router
