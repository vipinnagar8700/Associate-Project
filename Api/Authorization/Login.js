import axios from "axios";

export const login =(username,password)=>{
   
  return axios.post('https://assoc.studiomyraa.com/api/login_action',{email:username,password:password}).then((data)=>{
    
      if(data){
        return data;
      }
    }).catch((data)=>{
        alert("wronng credential")
    })
}
