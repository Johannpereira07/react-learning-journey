import {useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    
   const {addTodo} = useTodo();
   const [todoInput,setTodoInput]=useState("");

   function handleAddTodo(e){
    e.preventDefault();
    console.log(todoInput);
    addTodo(
        {
            id:Date.now(),
            todoMsg:todoInput,
            completed:false
        }
    )
    setTodoInput("");
   }

    return (
        <form  className="flex" autoComplete="off">
            <input
                type="text"
                name="todoInputField"
                placeholder="Write Todo..."
                value={todoInput}
                onChange={(e)=>setTodoInput(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 mr-1 bg-green-600 text-white shrink-0" onClick={(e)=>handleAddTodo(e)}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;

