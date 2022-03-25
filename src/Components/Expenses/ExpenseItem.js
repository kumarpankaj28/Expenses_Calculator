import React,{useState} from 'react'
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import Card from "../UI/Card";

function ExpenseItem(props) {
  const [newTitle, setNewTitle] = useState("");

  const changeHandler = (event) =>{
    setNewTitle(event.target.value);
  }
  const [title, setTitle] = useState(props.title);

  const clickHandler = () =>{
    setTitle(newTitle);
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <input type="text" value={newTitle} onChange={changeHandler} />
      <button className="expense-item__price" onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;

// props.date.toISOString()
