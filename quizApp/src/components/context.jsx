import React, { createContext,useState } from 'react'

//createContext

export const AppContext = createContext()

const Context =({children}) => {

 let [isDark, setIsDark] = useState(false)
 const[isCorrect,setIsCorrect]=useState(0)

  return (
    <AppContext.Provider value={{isDark,setIsDark,isCorrect,setIsCorrect}}>
        {children}
    </AppContext.Provider>
  )

}

export default Context