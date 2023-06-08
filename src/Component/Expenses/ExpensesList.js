import React from 'react';
import './ExpensesList.css'
import ExpenseItem from'./ExpenseItem'

const ExpenseList = (props) => {
    if (props.items.length ===0) {
        
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return(
    
        <ul className='expenses-list'>
            {
            props.items.map(expens => (
            <ExpenseItem
                key={expens.id}
                title={expens.title}
                amount={expens.amount}
                date={expens.date}
            />
        ))

            }

        </ul>
    )
}

export default ExpenseList;