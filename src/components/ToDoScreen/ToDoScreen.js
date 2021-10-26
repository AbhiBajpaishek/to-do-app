import React from "react";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoList from "../ToDoList/ToDoList";
import useToDoList from "../../hooks/use-todo";
import './ToDoScreen.css';


const ToDoScreen = ()=> {

    const [toDoList,addToDo,removeToDo] = useToDoList();

    const toDoAddHandler = (newTask) =>{
        addToDo(newTask);
    }

    const toDoRemoveHandler = (id) =>{
        removeToDo(id);
    }

    return (
        <div className="todo-screen">
            <ToDoInput onAdd = {toDoAddHandler}></ToDoInput>
            <ToDoList onRemove = {toDoRemoveHandler} toDoList={toDoList} ></ToDoList>
        </div>
    );
}

export default ToDoScreen;