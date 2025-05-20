import { useState } from 'react';
import './todo.css'
const TodoNew = (props) => {
    //useState hook (getter/setter)
    // const valueInput = "huhu"
    const [valueInput, setValueInput]= useState("")
    // console.log(">>> check point: ", props);
    const { addNewTodo}= props;
    
    // addNewTodo("Hoang")
    const handleClick =()=>{
        // alert("click me")
        // console.log({valueInput});
        addNewTodo(valueInput)
        setValueInput("")
        
    }

    const handleOnChange =(name)=>{
    //    console.log(">>>hihi", name);
       setValueInput(name)
    }
    
    return (
        <div className="todo-input-group">
            <input className="todo-input" type="text" placeholder="Enter your task" 
            onChange={(event)=>handleOnChange(event.target.value)}
            value={valueInput}
            />
            <button 
                className="todo-add-btn" 
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >Add</button>
           

        </div>
    )
}
export default TodoNew;