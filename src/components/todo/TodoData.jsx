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
    const { todoList } = props;
    // const name= props.name;
    // const age = props.age;
    // const data= props.data;

    // console.log(">>> check props: ",props);
    //     const handleDelete= (index)=>{
    // const newTodo =  valueInput.filter((item)=>item.index !==1,
    // setValueInput(newTodo)
    // )

return (
    <div className="todo-data">

        {todoList.map((item, index) => {
            return (<div className='todo-item' key={item.id}>
                <div>
                    {item.name}
                </div>
                <button >Delete</button>

            </div>)
        })}
    </div>
)
}

export default TodoData;