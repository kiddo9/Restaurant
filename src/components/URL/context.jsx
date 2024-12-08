import { createContext } from "react"

 const Contextcreate = createContext();

export const Context = ({children}) => {
    
  return (
    <div>
        <Contextcreate.Provider value={''}>
            {children}
        </Contextcreate.Provider>
    </div>
  )
}

