import {useState,useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
  const [username,setUsername]=useState("");
  const {setUser} = useContext(UserContext) 
  
  function handleNameChange(e){
    setUsername(e.target.value);
  }

   function handleSubmit(e){
    e.preventDefault();
    setUser({username});
  }

  return (
    <>
      <p>login</p>
      <input type="text" placeholder='Enter name' value={username} onChange={handleNameChange}/>
      {" "}
      <input type="text" placeholder='Enter Password'/>
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </>  
  )
}

export default Login