import React from 'react'
import MyStation from './MyStation/MyStation'
// import MyStation2 from './MyStation/MyStation2'
import Cookies from 'js-cookie'
import { Navigate, useNavigate } from 'react-router-dom'

const MyStationDashboard = () => {
  let c= Cookies.get('login')
 if(!c){
  return(
    <Navigate to={'/login'}/>
  )
 }
  return (
    <>
    <MyStation/>    
    </>
  )
}

export default MyStationDashboard;