import './style.css';
// const hello = "xin chào"; //string
// const hello = 5; //number
// const hello = true; //boolean
// const hello = undefined;
// const hello = null;
const hello = [1, 2, 3, 4, 5, 6, 7];
// const hello = {
//     name: "banana",
//     age: 19
// }
const MyComponent = () => {
    return (
        <>
            <div>
                {/* {hello} world */}

                {JSON.stringify(hello)} world
            </div>
            <div className='child'
            style={{borderRadius: "10px" }}>
                banana
            </div>
        </>
    )
}

export default MyComponent;