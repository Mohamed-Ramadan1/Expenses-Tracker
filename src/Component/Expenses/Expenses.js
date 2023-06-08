import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"; 
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import './Expenses.css'
import React, { useState } from "react";
import ExpenseList from "./ExpensesList";

const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState("2020")
    
    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
    }

    const filterdExpensed = props.items.filter(item => {
        return item.date.getFullYear().toString()===filterdYear
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />
            {
                <ExpenseList items={filterdExpensed} />

            }

        </Card>
    );
}

export default Expenses;