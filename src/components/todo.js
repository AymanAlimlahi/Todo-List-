import React from "react"; 
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import { useEffect } from "react";
import "./todo.css"
export default function Todo(){
    const[todos,setTodos]=useState([]);
    const[todo,setTodo]=useState("");
    const[todoEditing,setTodoEditing]=useState(null);
    const[edText,setEdText]=useState("");
    useEffect(()=>{
        const temp=localStorage.getItem("todos")
        const loaded=JSON.parse(temp)
        if(loaded){
            setTodos(loaded)
        }
    },[])
    useEffect(()=>{
        const temp=JSON.stringify(todos)
        localStorage.setItem("todos",temp)
    },[todos])
    /**for stock the to list in a todos which is  a table  */
    function handleSubmit(e){
        e.preventDefault()
        const newTodo={
            id:new  Date().getTime(),
            text:todo,
            completed:false,
        }
        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    /**for add the button delete and supp the items using this function  */
    function deleteTodo(id){
        const updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }
    function EditTodo(id){
        const updatedTodos=[...todos].map((todo)=>{
            if (todo.id ===id){
                todo.text=edText
            }
            return todo
        }
        )
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEdText("")
    }
    return(
        <div className="todo-item" >
                <center>
                    <form onSubmit={handleSubmit} >
                    <Fade top cascade>
                        <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} className="todotext" />
                        <button type="submit"  className="addtodo"> Add Todo</button>
                    </Fade>
                    </form>
                    {todos.map((todo)=><div key={todo.id}>
                    {todoEditing === todo.id ? (<input type="text" onChange={(e)=>setEdText(e.target.value)  } value={edText} className="addtext"/>) :(<div className="addtext">{todo.text}</div>)}<button onClick={()=>deleteTodo(todo.id)} className="deltodo">Delete</button> 
                    {todoEditing === todo.id ? (<button onClick={()=>EditTodo(todo.id)} className="eddtodo">Submit Edit</button>):(<button onClick={()=>setTodoEditing(todo.id)} className="eddtodo">Edit</button>)}
                    
                    
                    </div>)}
                </center>
        </div>
    )
}