import React,{useState,useEffect} from "react";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import {getToDoAll,addToDo,removeToDo} from '../../services/dbcall';
import './ToDoScreen.css';


const ToDoScreen = ()=> {

    const [toDoList,setToDoList] = useState([]);

    const toDoAddHandler = async (newTask) =>{
        addToDo(newTask,setToDoList);
    }

    const toDoRemoveHandler = (value,id) =>{
        removeToDo(id,setToDoList);
    }

    useEffect(()=>{
        getToDoAll(setToDoList);
    },[]);

    return (
        <div className="todo-screen">
            <ToDoInput onAdd = {toDoAddHandler}></ToDoInput>
            <ToDoList onRemove = {toDoRemoveHandler} toDoList={toDoList} ></ToDoList>
        </div>
    );
}

export default ToDoScreen;