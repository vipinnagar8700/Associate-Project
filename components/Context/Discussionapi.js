import {React,useState,createContext,  Children} from 'react'
    export const Discussapi=createContext()
const Discussionapi = ({children}) => {
   const[discussdata,setdiscussdata]=useState({
    dfiledata:null,
    dtext:'hi this is new text'
   })
  return (
    <Discussapi.Provider value={{discussdata,setdiscussdata}}>
        {children}
    </Discussapi.Provider>
  )
}

export default Discussionapi