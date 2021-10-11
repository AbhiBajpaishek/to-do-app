import React from "react";
import './ToDoList.css';

const ToDoList = (props) => {

    const toDoList= props.toDoList;

    const taskClickHandler = (event) => {
        let value=event.target.innerText;
        props.onRemove(value);
    }

    return (
        <div className="todo-list">
            <ul className="todo-list__items">

                {toDoList.length ? toDoList.map((toDoTask,index)=>{
                    return (<li className="todo-list__item" key={index} onClick={taskClickHandler}>
                                 {toDoTask}
                            </li>);
                }) : <p>All tasks completed</p>}

            </ul>
        </div>
    );
}

export default ToDoList;