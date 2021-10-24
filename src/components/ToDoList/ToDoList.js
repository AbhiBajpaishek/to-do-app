import React from "react";
import './ToDoList.css';

const ToDoList = (props) => {

    const toDoList= props.toDoList;

    const taskClickHandler = (event) => {
        let value=event.target.innerText;
        props.onRemove(value,event.target.id);
    }

    return (
        <div className="todo-list">
            <ul className="todo-list__items">
                {toDoList.length ? toDoList.map((toDoTask,index)=>{
                    return (<li className="todo-list__item" key={toDoTask.id} id={toDoTask.id} onClick={taskClickHandler}>
                                 {toDoTask.toDo}
                            </li>);
                }) : <p>All tasks completed</p>}

            </ul>
        </div>
    );
}

export default ToDoList;