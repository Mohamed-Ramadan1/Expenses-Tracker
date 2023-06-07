import React, { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);


    const clickHandelr = () => {
        setTitle("Updated values whay");
    }

    return (
        <Card className="expense-item ">
            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2 className="expense-item h2">{title}</h2>
                <div className="expense-item__price">${props.amount} </div>
            </div>
            <button onClick={clickHandelr}>Change title</button>

        </Card>
    )
}

export default ExpenseItem;
