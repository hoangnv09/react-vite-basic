import './todo.css'
const TodoNew = () => {
    return (
        <div className="todo-input-group">
            <input className="todo-input" type="text" placeholder="Enter your task" />
            <button className="todo-add-btn">Add</button>
        </div>
    )
}
export default TodoNew;