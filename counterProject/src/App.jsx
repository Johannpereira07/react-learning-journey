import { useState } from 'react'
import './App.css'


function App() {

  let [counter,setCounter]=useState(0);

  function incrementCounter(){
  // setCounter(counter+1);
  // setCounter(counter+1);
  // setCounter(counter+1);  increments by only 1

  setCounter((previousCount)=>previousCount+1);
  setCounter((previousCount)=>previousCount+1);
  setCounter((previousCount)=>previousCount+1); //increments by 3

}

function decreaseCounter(){
 if(counter>0) 
 setCounter(counter-1);
}

  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={incrementCounter}>up</button>
      <button onClick={decreaseCounter}>down</button>
    </>
  )
}

export default App
