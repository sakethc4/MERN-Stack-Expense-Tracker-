const Expense = require('../models/expensesModel')
const mongoose = require('mongoose')

// get all expenses 
const getExpenses = async (req, res) => {
    const expenses = await Expense.find({}).sort({createdAt: -1})

    res.status(200).json(expenses)
}

//get single expense 
const getExpense = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such expense'})
    }
  
    const expense = await Expense.findById(id)
  
    if (!expense) {
      return res.status(404).json({error: 'No such expense'})
    }
  
    res.status(200).json(expense)
  }
  

//create a new expense 
const createExpense = async (req, res) => {
    const {title, cost, category} = req.body

    try {
        const expense = await Expense.create({title, cost, category})
        res.status(200).json(expense)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete an expense 
const deleteExpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such expense'})
      }
    
      const expense = await Expense.findOneAndDelete({_id: id})

      if (!expense) {
        return res.status(400).json({error: 'No such expense'})
      }
      res.status(200).json(expense)

}

//update an expense 
const updateExpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such expense'})
      }
      const expense = await Expense.findOneAndUpdate({_id: id}, {
        ...req.body 
      })

      if (!expense) {
        return res.status(400).json({error: 'No such expense'})
      }
      res.status(200).json(expense)
}

module.exports = {
    getExpenses,
    getExpense,
    createExpense,
    deleteExpense,
    updateExpense
}