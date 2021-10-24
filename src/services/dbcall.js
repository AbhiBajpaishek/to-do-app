const url = 'https://react-todo-app-8a2be-default-rtdb.firebaseio.com/todo.json';


export const getToDoAll = async (setState) =>
{
    let response = await fetch(url);
    let toDoList = await response.json();

    let newToDoList=[];
    for(const key in toDoList)
    {
        newToDoList.push({
                id:key,
                toDo:toDoList[key].toDo
            }
        );
    }

    //if(newToDoList.length>0)
        setState(newToDoList);
    return newToDoList;
}


export const addToDo = (toDoTask,setToDoList) =>
{   
    let responseID;
    const params = {
        method:"POST",
        headers:{
            "content-type":"applcation/json"
        },
        body: JSON.stringify({toDo:toDoTask})
    }
    fetch(url,params)
    .then(response => response.json())
    .then(data => {responseID = data.name;
        getToDoAll(setToDoList);
    });
    
    return responseID;
}


export const removeToDo = (id,setToDoList) =>{
    console.log(id);
    const delURL= `https://react-todo-app-8a2be-default-rtdb.firebaseio.com/todo/${id}.json`;
    const params = {
        method:"DELETE",
        headers:{
            "content-type":"applcation/json"
        }
    }
    fetch(delURL,params)
    .then(response => response.text())
    .then(data => {
        getToDoAll(setToDoList);
        console.log(data);
        
    });
}

