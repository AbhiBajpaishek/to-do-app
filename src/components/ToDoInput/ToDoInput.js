import React,{useState} from "react";
import styles from './ToDoInput.module.css';

const ToDoInput = (props) => {

    const [todoTask,setToDoTask] = useState('');
    const [isValid,setIsValid] = useState(true);
    const toDoTaskChangeHandler = (event) =>
    {
        let taskText=event.target.value;
        if(taskText.trim().length>0){
            setIsValid(true);
        }
        else
            setIsValid(false);
        setToDoTask(taskText);
        
    }

    const addTaskHandler = (event) => {
        if(todoTask.trim().length===0){
            setIsValid(false);
            return;
        }
        props.onAdd(todoTask);
        setToDoTask('');
    }

    return (
        <div className={`${styles['todo-input']} ${!isValid && styles.invalid} `}>
            <label className={`${!isValid && styles.invalid}`}>Course Goal</label>
            <input type="text" className={styles["input-box"]} onChange={toDoTaskChangeHandler} value={todoTask}></input>
            <div>
                <button className={styles.btn} onClick={addTaskHandler} >Add Goal</button>
            </div>
        </div>
    );
}

export default ToDoInput;