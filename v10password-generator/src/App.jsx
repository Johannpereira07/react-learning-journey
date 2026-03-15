
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass='';
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="123456789";
    if(charAllowed) str+="`~!@#$%^&*()_{}[]";

    for (let index = 0; index < length; index++) {
      
      let charIndex = Math.floor(Math.random()*str.length); 
      pass+=str[charIndex];
    }

    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);
    
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  const passwordRef=useRef(null);

  const copyPasswordToClipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    //passwordRef.current?.focus();
    //passwordRef.current?.setSelectionRange(0,3);
    passwordRef.current?.select();
  },[password]);


  return (
    <>
    <div className='w-full max-w-md bg-gray-700 mx-auto rounded-lg my-8 px-4 py-1 text-orange-500 shadow-md'>
      <h1 className="text-center text-white my-3">Password Generator</h1>
      <div className='flex rounded-lg overflow-hidden shadow mb-4'>
        <input type="text" placeholder='Password' value={password} className='w-full outline-none px-3 py-1 bg-white'readOnly ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard} className='bg-blue-600 text-white px-2 py-1 shrink-0 hover:bg-blue-700'>copy</button>
      </div>

      <div className='flex gap-x-2 text-sm'>
        <div className='flex gap-x-1'>
          <input 
          type="range"
          min={5}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex gap-x-1'>
          <input 
          type="checkbox" 
          id='numberAllowed'
          defaultChecked={numberAllowed}
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor='numberAllowed'>numbers</label>
        </div>
        <div className='flex gap-x-1'>
          <input 
          type="checkbox" 
          id='charAllowed'
          defaultChecked={charAllowed}
          onChange={()=>{setCharAllowed((prev)=>!prev)}}
          />
          <label htmlFor='charAllowed'>characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
