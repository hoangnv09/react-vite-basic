import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import './components/todo/todo.css';
import { useState } from 'react';
const App = () => {

  const [todoList, setTodoList]= useState([
    {id: 1, name: "small banana"},
    {id: 2, name: "big banana"},

  ])

  const banana = "Hoang dep trai"
  const age = 25;
  const data ={
    address: "Binh Phuoc",
    country: "Viet Nam"
  }
  const addNewTodo =(name)=>{
    // alert(`call me ${name}`)
    const newTodo = {
      id: randomIntFromInterval(1,1000000),
      name: name
    }

    setTodoList([...todoList, newTodo])
    //array.push
  }
  const randomIntFromInterval = (min, max)=>{ // min and max included
    return Math.floor(Math.random() * (max-min+1)+min);
  }

  //{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo list
      </div>
      <TodoNew 
      addNewTodo={ addNewTodo}
      />
      <TodoData 
      name={banana}
      age={age}
      data={data}
      todoList={todoList}
      />
      <div className='logo-image'>
        <img src={reactLogo} className='logo' alt="" srcSet="" />
      </div>
    </div>
  )
}
export default App;