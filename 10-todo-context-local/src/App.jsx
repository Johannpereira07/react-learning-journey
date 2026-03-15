import { useState,useEffect } from 'react'
import './App.css'
import { TodoForm,TodoItem } from './components'
import { TodoProvider } from './contexts'
function App() {

  const [todos,setTodos]=useState(
    ()=>{
      const temp= localStorage.getItem("todos");
      console.log(temp);
      const localTodos=temp?JSON.parse(localStorage.getItem("todos")):[];
      if(localTodos && localTodos.length>0){
        return localTodos;
      }
      else{
        return [
          {
            id:1,
            todoMsg:"create new todo",
            completed:false
          }
        ]
      }
    }
  );

  const addTodo=(todo)=>{
    setTodos((prev)=>[todo,...prev])
  };
  const updateTodo=(id,newTodo)=>{
    console.log("update : ",id);
    setTodos((prev)=>prev.map((todo)=>todo.id==id?newTodo:todo))
  }
  const deleteTodo=(id)=>{
    console.log("delete called");
    setTodos((prev)=>prev.filter((todo)=>todo.id!=id))
  }
  const toggleCompleted=(id)=>{
    setTodos((prev)=>
      prev.map((todo)=>todo.id==id?({...todo,completed:!todo.completed}):(todo))
    )
  }

  console.log(todos);

  // useEffect(() => {
  //   const temp= localStorage.getItem("todos");
  //   console.log(temp);
  //   const localTodos=temp?JSON.parse(localStorage.getItem("todos")):[];
  //   setTodos(localTodos);
  // }, [])

  useEffect(()=>{
  const todoString=JSON.stringify(todos);
   localStorage.setItem("todos",todoString);
  },[todos]);
  


  return (
      <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
          <div className="bg-[#13243e] min-h-screen py-8">
                      <div className="w-full max-w-2xl mx-auto shadow-md  bg-[#a3a7c2] rounded-lg px-4 py-3 text-white">
                          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                          <div className="mb-4">
                              <TodoForm/>
                          </div>
                          <div className="flex flex-wrap gap-y-3">
                              {
                                todos.map((todo)=>{
                                  return (
                                  <TodoItem key={todo.id} todo={todo}/>
                                  );
                                })
                              }
                          </div>
                      </div>
          </div>
      </TodoProvider>    
  )
}

export default App
