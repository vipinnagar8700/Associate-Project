import React, { createContext, useState } from 'react'
export const  Session=createContext()
const Count = ({children}) => {
  let [sessionapi,setsessionapi]=useState(['EBDHIU'])
  let data={sessionapi,setsessionapi}
  return (
    <Session.Provider value={data}>
{children}
    </Session.Provider>
  )
}

export default Count


