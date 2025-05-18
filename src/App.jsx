import './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import './components/todo/todo.css';
const App = () => {
  const banana = "Hoang dep trai"
  const age = 25;
  const data ={
    address: "Binh Phuoc",
    country: "Viet Nam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">
        Todo list
      </div>
      <TodoNew />
      <TodoData 
      name={banana}
      age={age}
      data={data}
      />
      <div className='logo-image'>
        <img src={reactLogo} className='logo' alt="" srcset="" />
      </div>
    </div>
  )
}
export default App;