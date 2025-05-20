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
    const {todoList}= props;
    // const name= props.name;
    // const age = props.age;
    // const data= props.data;

    // console.log(">>> check props: ",props);
    const handleDelete= ()=>{

    }
    return (
        <div className="todo-data">

            {todoList.map((item, index)=>{
                return(<div className='todo-item'>
                    <div>
{item.name}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                    
                </div>)
            })}
            {/* <div>My name is {name}</div> */}
            {/* <div>chuối to</div>
            <div>
                chuối nhỏ
            </div> */}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;