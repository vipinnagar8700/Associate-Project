import axios from "axios"

export const  RecentSes=()=>{
  return  axios.get('https://assoc.studiomyraa.com/api/get_session').then((result)=>{
    
  return result.data.results

  })
}

