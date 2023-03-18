import {React,createContext, useState }from 'react'

  export const Stationform = createContext();

 const StationProvider=({children})=>{
    const[formvalue,setformvalue]=useState({
        StationName:"",
        Associate:[],
        Privacy:"",
        Image:null,
        Statement:""
    })
 
      return <Stationform.Provider value={{formvalue,setformvalue}}>{children}</Stationform.Provider>
}

export default StationProvider;