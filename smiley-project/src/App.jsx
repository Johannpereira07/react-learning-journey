import { useState } from "react";
import { BackgroundCircle } from "../components/BackgroundCircle";
import {Eye} from "../components/Eye";
import { Mouth } from "../components/Mouth";

function App() {



  let [state,setState]=useState([Math.PI*3/2,Math.PI*5/2,"translate(0,200)"])
  let [clickCount,setClickeCount]=useState(0);

 const width=window.innerWidth;
 const height=window.innerHeight;
 const eyeOffset=110;

 

  const changeEmotion=()=>{
    setClickeCount(clickCount+1);
    
    setState((clickCount%2==0)?([Math.PI*3/2,Math.PI*5/2,"translate(0,200)"]):([Math.PI/2,Math.PI*3/2,null]));
  }  


  return (
    <>
    <h1 style={{margin:'0' ,marginBottom:'5' ,textAlign:"center"}}>Click me</h1>
    <svg height={height} width={width}>
    <g onClick={changeEmotion} style={{cursor:"pointer"}}  transform={`translate(${width/2},${height/2})`}>
     <BackgroundCircle radius={height/2-5} strokeWidth={10}/>
     <Eye radius={40} eyeOffset={-eyeOffset}/>    
     <Eye radius={40} eyeOffset={eyeOffset}/>    
     <Mouth startAngle={state[0]} endAngle={state[1]} transform={state[2]}/>
    </g>  
    </svg>
    </>
  )
}

export default App
