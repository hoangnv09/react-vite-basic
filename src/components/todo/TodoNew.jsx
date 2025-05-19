import './todo.css'
const TodoNew = (props) => {

    console.log(">>> check point: ", props);
    const { addNewTodo}= props;
    
    // addNewTodo("Hoang")
    const handleClick =()=>{
        alert("click me")
    }

    const handleOnChange =(name)=>{
       console.log(">>>hihi", name);
    }
    
    return (
        <div className="todo-input-group">
            <input className="todo-input" type="text" placeholder="Enter your task" 
            onChange={(event)=>handleOnChange(event.target.value)}
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