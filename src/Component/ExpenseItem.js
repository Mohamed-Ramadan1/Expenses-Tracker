import React from "react";
import './ExpenseItem.css'

const ExpenseItem = () => {
    const expenceDate = new Date(2021, 2, 28);
    const expenceTitle = "Car Insurance";
    const expencAmount = 294.67;
    return (
        <div className="expense-item ">
            <div>{expenceDate.toISOString()}</div>

            <div className="expense-item__description">
                <h2 className="expense-item h2">{expenceTitle}</h2>
                <div className="expense-item__price">${expencAmount}</div>
            </div>

        </div>
    )
}

export default ExpenseItem;
