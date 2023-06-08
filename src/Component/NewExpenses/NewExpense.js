import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpens = (props) => {
    const [isEditing, setIsDeting] = useState(false);

    const saveDataHandler = (passedValues) => {
        const enterdData = {
            ...passedValues,
            id: Math.random().toString()
        }
        props.onAddExpense(enterdData);
        setIsDeting(false)
    };
    const startEditingHandler = () => {
        setIsDeting(true);
    }

    const stopEditing = () => {
        setIsDeting(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveDataHandler} onCancle={stopEditing} />}
        </div>
    )
}

export default NewExpens;