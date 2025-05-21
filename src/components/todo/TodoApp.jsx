import './todo.css'
import TodoNew from './TodoNew';
import TodoData from './TodoData';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';
const TodoApp = () => {
    const [todoList, setTodoList] = useState([
    ])
    const addNewTodo = (name) => {
        // alert(`call me ${name}`)
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }
        setTodoList([...todoList, newTodo])
        //array.push
    }
    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo)
    }
    return (
        <div className="todo-container">
            <div className="todo-title">
                Todo list
            </div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            {todoList.length > 0 ?
                <TodoData

                    todoList={todoList}
                    deleteTodo={deleteTodo}
                /> :
                <div className='logo-image'>
                    <img src={reactLogo} className='logo' alt="" srcSet="" />
                </div>
            }
        </div>
    )
}
export default TodoApp;