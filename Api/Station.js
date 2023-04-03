import axios from "axios"
import Cookies from "js-cookie"
export const allStationdata=()=>{
    let cookie= Cookies.get('login')
 
  let headers = {
  "Authorization": `Bearer ${cookie}`
}
   return   axios.get('https://assoc.studiomyraa.com/api/get_station',{headers}).then((response)=>{
   
           return response.data.results
    })
}