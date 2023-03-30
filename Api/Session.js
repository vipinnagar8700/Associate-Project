import axios from "axios"

export const  RecentSes=()=>{
  return  axios.get('https://assoc.studiomyraa.com/api/get_session').then((result)=>{
    
  return result.data.results

  })
}
export const Searchdate= (start_date,end_date,text)=>{
  var formdata = new FormData();
formdata.append("start_date",  start_date);
formdata.append("end_date", end_date);
formdata.append("text", text);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 return fetch("https://assoc.studiomyraa.com/api/search_session", requestOptions)
  .then(response => response.text())
  .then((data)=>{
    return  JSON.parse(data)
  })
  .catch(error => console.log('error', error));
}

