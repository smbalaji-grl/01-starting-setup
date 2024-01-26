
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React,{useState} from "react";

export default function ExpenseItem(props){
const [title_,setTitle_]= useState(props.title);
console.log("execution count");
const clickHandler=()=>{
setTitle_("updated");
};
    return(
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title_}</h2>
            <div className="expense-item__price">${props.amount}</div>
         </div>
         <button onClick={clickHandler}> change title </button>
    </Card>
  );
}