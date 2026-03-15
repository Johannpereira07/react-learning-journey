import UserContext from "./UserContext";

import React from 'react'

function ContextProvider({children}) {

    const [user,setUser]=React.useState(null);

  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default ContextProvider