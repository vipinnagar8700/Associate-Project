import { useState,useContext,createContext } from "react";
export const  Icon= createContext()
  
export  const Iconprovider=({children})=>{
    const[iconaction,seticonaction]=useState({
        SessionMessaging:false,
        countvalue:0,
        event:false,
        addstation:false,
        station:false,
        editstation:false,
        aeditstation:false,
        addsession:false,
        actionstationfile:false,
        stationfile:false,
        mystation:false,
        direcrtsesion:false,
        fullscrenview:false,
        search:false,
        actionsearch:false,
        messageoption:false,
        showiconsubheader:true,
        leaveactionmenu:false,
        displayprority:true
    })
    return (<Icon.Provider value={{iconaction,seticonaction}}>{children}</Icon.Provider>)
}
export default Iconprovider;