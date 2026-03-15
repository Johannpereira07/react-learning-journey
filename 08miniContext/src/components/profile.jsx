import {useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {

  const {user} = useContext(UserContext);
  

  if(user)  
  return (
    <p>Hello {user.username}</p>
  );

  return (
    <p>Please Enter Your details</p>
  )
}

export default Profile