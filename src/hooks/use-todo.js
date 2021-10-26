import { useState, useEffect } from "react";

const useToDoList = () => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    getToDoAll();
  }, []);

  const url =
    "https://react-todo-app-8a2be-default-rtdb.firebaseio.com/todo.json";

  const getToDoAll = async () => {
    let response = await fetch(url); 
    let toDoList = await response.json();

    let newToDoList = [];
    for (const key in toDoList) {
      newToDoList.push({
        id: key,
        toDo: toDoList[key].toDo,
      });
    }

    setToDoList(newToDoList);
  };

  const addToDo = (toDoTask) => {
    const params = {
      method: "POST",
      headers: {
        "content-type": "applcation/json",
      },
      body: JSON.stringify({ toDo: toDoTask }),
    };
    fetch(url, params)
      .then((response) => response.json())
      .then((data) => {
        getToDoAll();
      });
  };

  const removeToDo = (id) => {
    const delURL = `https://react-todo-app-8a2be-default-rtdb.firebaseio.com/todo/${id}.json`;
    const params = {
      method: "DELETE",
      headers: {
        "content-type": "applcation/json",
      },
    };
    fetch(delURL, params)
      .then((response) => response.text())
      .then((data) => {
        getToDoAll();
      });
  };

  return [toDoList,addToDo,removeToDo]
};

export default useToDoList;
