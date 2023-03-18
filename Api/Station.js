import axios from "axios"

export const allStationdata=()=>{
   return   axios.get('https://assoc.studiomyraa.com/api/get_station').then((response)=>{
           return response.data.results
    })
}