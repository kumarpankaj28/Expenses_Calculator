import React,{useState} from 'react'
import Expenses from "./Components/Expenses/Expenses";
import "./App.css";
import NewExpenses from './Components/NewExpenses/NewExpenses';
let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 230,
    date: new Date(2021, 9, 5),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 880,
    date: new Date(2021, 4, 2),
  },
  {
    id: "e4",
    title: "Foods",
    amount: 271,
    date: new Date(2021, 3, 4),
  },
];

const App =() =>{

  const [expenses,setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) =>{
    const updatedExpense =[expense, ...expenses];
    setExpenses(updatedExpense);
  };
  
  return (
    <div>
      <h2  className="head">Expenses</h2>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
