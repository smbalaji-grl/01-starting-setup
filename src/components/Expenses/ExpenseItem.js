
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

export default function ExpenseItem(props){

let title_= props.title;
const clickHandler=()=>{
title_= "Updated";
console.log("it is real updated?");
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