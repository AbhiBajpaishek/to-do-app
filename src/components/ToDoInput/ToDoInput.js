import React,{useState} from "react";
import './ToDoInput.css';

const ToDoInput = (props) => {

    const [todoTask,setToDoTask]=useState('');

    const toDoTaskChangeHandler = (event) =>
    {
        let taskText=event.target.value;
        setToDoTask(taskText);
    }

    const addTaskHandler = (event) => {
        props.onAdd(todoTask);
        setToDoTask('');
    }

    return (
        <div className="todo-input">
            <h4>Course Goal</h4>
            <input type="text" className="input-box" onChange={toDoTaskChangeHandler} value={todoTask}></input>
            <div>
                <button className="btn" onClick={addTaskHandler} >Add Goal</button>
            </div>
        </div>
    );
}

export default ToDoInput;