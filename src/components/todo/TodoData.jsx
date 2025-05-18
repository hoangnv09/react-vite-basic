import './todo.css'
const TodoData = (props) => {
// const TodoData = ({name}) => {

    //props la 1 bien object {}
    // {
    //     name: "Hoang",
    //     age:25,
    //     data:{}
    // }
    const {name, age,data}= props;
    // const name= props.name;
    // const age = props.age;
    // const data= props.data;

    console.log(">>> check props: ",props);
    
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>chuối to</div>
            <div>
                chuối nhỏ
            </div>
        </div>
    )
}

export default TodoData;