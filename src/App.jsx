import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import './components/todo/todo.css';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
const App = () => {

  const [todoList, setTodoList] = useState([
    // {id: 1, name: "small banana"},
    // {id: 2, name: "big banana"},

  ])

  // const banana = "Hoang dep trai"
  // const age = 25;
  // const data ={
  //   address: "Binh Phuoc",
  //   country: "Viet Nam"
  // }
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

  //{key:value}
  return (
    <>
      <Header />
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
      <Footer/>
    </>

  )
}
export default App;