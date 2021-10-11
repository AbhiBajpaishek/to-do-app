import React,{useState} from "react";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import './ToDoScreen.css';

const toDoDummyList = ['Lean HTML','Learn CSS', 'Learn Javascript'];

const ToDoScreen = ()=> {

    const [toDoList,setToDoList] = useState(toDoDummyList);

    const toDoAddHandler = (newTask) =>{
        setToDoList((prevState)=>{
            return [newTask,...prevState];
        });
    }

    const toDoRemoveHandler = (value) =>{
        setToDoList((prevState)=>{
            return prevState.filter((item) => item!==value);
        });
    }

    return (
        <div className="todo-screen">
            <ToDoInput onAdd = {toDoAddHandler}></ToDoInput>
            <ToDoList onRemove = {toDoRemoveHandler} toDoList={toDoList} ></ToDoList>
        </div>
    );
}

export default ToDoScreen;