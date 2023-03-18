import axios from "axios"

export const  RecentSes=()=>{
  return  axios.get('https://studiomyraa.com/assoc/api/get_session').then((result)=>{
    
  return result.data.results

  })
}

