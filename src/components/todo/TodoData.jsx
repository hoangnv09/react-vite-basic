import { useEffect, useState } from 'react';
import './todo.css'
const TodoData = (props) => {
    // const TodoData = ({name}) => {

    //props la 1 bien object {}
    // {
    //     name: "Hoang",
    //     age:25,
    //     data:{}
    // }
    //destrustring
    const { todoList, deleteTodo } = props;
    // const name= props.name;
    // const age = props.age;
    // const data= props.data;

    // console.log(">>> check props: ",props);
    //  const [id, setId] = useState<number|null>(null)
    //  useEffect(()=>{
    //     if(item){
    //         setId(item.id)
    //     }
    //  },[item])
    const handleDelete = (id) => {
        deleteTodo(id)
    };

    return (
        <div className="todo-data">

            {todoList.map((item, index) => {
                return (<div className='todo-item' key={item.id}>
                    <div>
                        {item.name}
                    </div>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>

                </div>)
            })}
        </div>
    )
}

export default TodoData;