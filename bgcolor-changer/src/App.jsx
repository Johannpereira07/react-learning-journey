import { useState } from 'react'

import './App.css'

function App() {
const [color,setColor]=useState("olive")

  function changeBgColor(event){
    const btn=event.target;
    const newColor=btn.innerHTML;   
    setColor(newColor);
  }

  return (
    <>
      <div className='w-full h-screen duration-1000' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap bottom-14 justify-center gap-3 bg-amber-50 rounded-full inset-x-0 shadow-2xl mx-2'>
            <button onClick={changeBgColor} className='text-white shadow-lg ml-5 my-3 bg-yellow-300 rounded-full py-2 px-6 w-1xl'>yellow</button>
            <button onClick={changeBgColor} className='text-white shadow-lg my-3 bg-red-500 rounded-full py-2 px-6 w-1xl'>red</button>
            <button onClick={changeBgColor} className='text-white shadow-lg my-3 bg-blue-400 rounded-full py-2 px-6 w-1xl'>blue</button>
        </div>
      </div>
    </>
  )
}

export default App
