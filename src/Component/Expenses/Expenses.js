import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; 
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import './Expenses.css'
import React, { useState } from "react";

const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState("2020")
    
    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
    }

    

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
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

        </Card>
    );
}

export default Expenses;