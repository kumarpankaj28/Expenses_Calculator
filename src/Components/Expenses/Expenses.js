import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
// import Card from '../UI/Card';

let Expenses = (props) => {
  return (
    <div className="expenses">
      {props.item.map((expense) => ( //Map function for looping....
        <ExpenseItem
          date={expense.date}
          title={expense.title} //""Food as a variable pass ;
          amount={expense.amount}
        />
      ))}
{/* 
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title} //""Food as a variable pass ;
        amount={props.item[1].amount}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title} //""Food as a variable pass ;
        amount={props.item[2].amount}
      />
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title} //""Food as a variable pass ;
        amount={props.item[3].amount}
      /> */}
    </div>
  );
};

export default Expenses;
