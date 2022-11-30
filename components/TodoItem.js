import {React, useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Home.module.css";
import deleteData from "../pages/api/deleteData";
import stylesc from './Card.module.css';

function TodoItem(todo){
    console.log("todo>>>>>", todo)
    const [isChecked, setisChecked] = useState(false);
    const [done, isDone] = useState(true);
    const [aDelete, isDeleted] = useState("");
    const [inputData, setInputData] = useState({});
    let d = "";
    const handleCheck = async() => {
        console.log(">>>>>>>>>ischecked??",isChecked);
        isDone(!todo.todo.data.done)
        let c = !todo.todo.data.done;
        isDeleted(todo.todo.ref["@ref"].id)
        d=todo.todo.ref["@ref"].id;
        let g = {
            ...inputData,
            done: c,
        }
        await fetch("../api/updateData", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({data: g, id: d})
        }).then(()=>deleteData()).catch((e)=>console.log(e))
    };
    const handleDelete = () => {
        d=todo.todo.ref["@ref"].id;
        isDeleted(todo.todo.ref["@ref"].id)
        deleteItem()
        console.log("delete");
    };
    async function deleteItem(){
        await fetch("../api/deleteData",{
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: todo.todo.ref["@ref"].id}),
        }).then(()=>{
            deleteData()
            toast("Deleted Successfully.")
            window.location.reload()
        }).catch((e)=> {
            toast("Some Error Occured.")
            console.log(e)
        })
    }

    useEffect(()=>{},[todo])
    return(
        <>
        <ToastContainer/>
        {/* <Card className={styles.effcar}>
            <Card.Body>
                {todo.todo.data.task}
                <button classname={styles.butcar} onClick={handleDelete}>Delete</button>
            </Card.Body>
        </Card> */}
        <div>
            <span className={styles.eachtodo}>
                <p className={styles.text}></p>
                <div className={stylesc.carddi}>
                    <p className={stylesc.cardHeaderWrapper}>
                        {todo.todo.data.task}
                    </p>
                    <input
                        type="checkbox"
                        className={styles.toggle}
                        defaultChecked={todo.todo.data.done}
                        onChange={handleCheck}
                        onClick={()=>setisChecked(!isChecked)}
                    />
                    <button onClick={handleDelete}> Delete </button>
                    {/* {todo.todo.data.done == true ? <div>(Task Completed!!)</div> : <div>TO DO</div>} */}
                </div>
            </span>
        </div>
        </>
    );
}

export default TodoItem;