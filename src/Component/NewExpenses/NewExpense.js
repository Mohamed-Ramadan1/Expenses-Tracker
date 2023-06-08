import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpens = (props) => {
    const [isEditing, setIsDeting] = useState(false);

    const saveDataHandler = (passedValues) => {
        const enterdData = {
            ...passedValues,
            id:Math.random().toString()
        }
        props.onAddExpense(enterdData)
    }
    const startEditingHandler = () => {
        setIsDeting(true);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveDataHandler} />}
        </div>
    )
}

export default NewExpens;