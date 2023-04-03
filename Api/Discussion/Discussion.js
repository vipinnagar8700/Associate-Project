import axios from "axios";
import Cookies from "js-cookie";

 export const discusscomment=(id)=>{
alert(id)
    let cookie= Cookies.get('login')
 
    let headers = {
    "Authorization": `Bearer ${cookie}`
  }
 return  axios.get(`https://studiomyraa.com/assoc/api/get_single_session/${id}`,{headers}).then((data)=>{
    
    return data.data
    })
 }