
import { createContext, useContext, useEffect, useState } from "react"
import { Navigate,} from "react-router-dom";


 const Contextcreate = createContext();

export const Context = ({children}) => {
    
  const [user, setUser] = useState(null)
  return (
    <div>
        <Contextcreate.Provider value={{user, setUser}}>
            {children}
        </Contextcreate.Provider>
    </div>
  )
}




export const Auth = () => {
  const isAdmin = sessionStorage.getItem('adminAuth')

  return isAdmin == "true"
}


export const Check = ({children}) => {

  if(!Auth()){
    return <Navigate to={'/Auth/Admin'} replace />
  }

  return children
}

export const MemberLoggedIn = ({children}) => {
  const isMemberLoggedIn = sessionStorage.getItem('authMember')

  isMemberLoggedIn == true

  if(!isMemberLoggedIn){
    return <Navigate to={'/Auth/Login/member'} replace />
  }


  return children
}

export const GuestLoggedIn = ({children}) => {
  const isGuestLoggedIn = sessionStorage.getItem('Auth')

  isGuestLoggedIn == true

  if(!isGuestLoggedIn){
    return <Navigate to={'/Auth/Login/guest'} replace />
  }


  return children
}
