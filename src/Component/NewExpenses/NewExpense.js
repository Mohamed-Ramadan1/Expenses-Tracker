import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpens = (props) => {
    const saveDataHandler = (passedValues) => {
        const enterdData = {
            ...passedValues,
            id:Math.random().toString()
        }
        props.onAddExpense(enterdData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveDataHandler} />
        </div>
    )
}

export default NewExpens;