import axios from "axios";
import Cookies from "js-cookie";

 export const discusscomment=(id)=>{

    let cookie= Cookies.get('login')
 
    let headers = {
    "Authorization": `Bearer ${cookie}`
  }
 return  axios.get(`https://studiomyraa.com/assoc/api/get_single_session/${id}`,{headers}).then((data)=>{
    
    return data.data
    })
 }
 export const addcomment=(discussdata,id,content)=>{
   let cookie= Cookies.get('login')
   var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${cookie}`);
alert(discussdata.dfiledata)
var formdata = new FormData();
formdata.append("session_id", +(id));
formdata.append("content", content);
formdata.append("img", discussdata.dfiledata, `/C:/Users/user/Pictures/Screenshots/${discussdata.dfiledata.name}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://assoc.studiomyraa.com/api/add_comment", requestOptions)
  
  .then((result) => {
   return result.json()
  })
  .catch(error => console.log('error', error));
 }

 export const getcommentbyreply=(id)=>{
  let cookie= Cookies.get('login')
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${cookie}`);





var requestOptions = {
  method: 'GET',
  headers: myHeaders,

  redirect: 'follow'
};

 return fetch(`https://assoc.studiomyraa.com/api/get_reply/${id}`, requestOptions)
 .then((result) => {
  return result.json()
 })
 .catch(error => console.log('error', error));
 }

 export const addcommentreply=(session_id,id,contentreply)=>{
 
  let cookie= Cookies.get('login')
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${cookie}`);

var formdata = new FormData();
formdata.append("session_id", session_id);
formdata.append("comment_id", id);
formdata.append("content", contentreply);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};


 return fetch("https://assoc.studiomyraa.com/api/reply_comment", requestOptions).then((data)=>{
  return data.json()
 })
  
  
  .catch(error => console.log('error', error));
 }