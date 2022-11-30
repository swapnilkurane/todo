import {React, useEffect, useState} from "react";
import styles from "../styles/Home.module.css";
import TodoItem from "./TodoItem";
import newData from "../pages/api/newData";
import Tot from './Tot';


function Todo() {
    const [newTodo, setnewTodo] = useState("");
    const handleInput = (e) => {
        setnewTodo(e.target.value);
        setInputData({
            ...inputData,
            newTodo: e.target.value,
        });
    };

    async function addTodoItem(){
        await fetch("../api/newData", requestParams).then(()=> newData()).catch((e)=>{console.log(e)})
    }
    const HandleSubmit = (e) => {
        console.log(newTodo);
        addTodoItem();
        setnewTodo("");
        fetchData();
    };

    const [data, setData] = useState([]);
    async function fetchData() {
        const res = await fetch("../api/getData");
        const newData = await res.json();
        setData(newData);
    }

    const [inputData, setInputData] = useState({})
    const requestParams = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({data: inputData})
    };

useEffect(() => {
  fetchData();
}, [newTodo]);

    return (
    <div className={styles.maincont}>
        <h1>
            Todo App
        </h1>
        <div className={styles.newTodo}>
            <h3>
                Add new todo
            </h3>
            <div className={styles.semi}>
                <input
                type="text"
                placeholder="Enter Todo Here"
                value={newTodo}
                onChange={(e)=>handleInput(e)}
                ></input>
                <div>
                <button onClick={()=>HandleSubmit()}>Add Todo</button>
                </div>
            </div>
        </div>
        <div>
            {
                data && data.map((todo) => (
                    <TodoItem key={todo.ref["@ref"].id} todo={todo}/>
                ))
            }
        </div>
        <div className={styles.tot}>
            {
                <Tot todo={data}/>
            }
        </div>
    </div>
    );
}

export default Todo;