import axios from "axios"
import Cookies from "js-cookie";
import {React, useContext } from "react"
import { Session } from "../components/Context/Count";
  
export const  RecentSes=()=>{
    let cookie= Cookies.get('login')
 
  let headers = {
  "Authorization": `Bearer ${cookie}`
}
  return  axios.get('https://assoc.studiomyraa.com/api/get_session',{headers}).then((result)=>{
 
  return result.data.results

  })
}
export const Searchdate= (start_date,end_date,text)=>{
  let cookie= Cookies.get('login')
 
  let headers = {
  "Authorization": `Bearer ${cookie}`
}
  var formdata = new FormData();
formdata.append("start_date",  start_date);
formdata.append("end_date", end_date);
formdata.append("text", text);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://assoc.studiomyraa.com/api/search_session", requestOptions,{headers})
  .then(response => response.text())
  .then((data)=>{
    return  JSON.parse(data)
  })
  .catch(error => console.log('error', error));
}

