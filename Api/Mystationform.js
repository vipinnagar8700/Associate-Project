export const stationform=(formvalue)=>{
    if(formvalue){
        window.localStorage.setItem("myObject", JSON.stringify(formvalue));
    
        const{StationName, Associate, Privacy, Image,Statement}=formvalue
    
        console.log(formvalue,"save");
        var formdata = new FormData();
    formdata.append("StationName", StationName);
    formdata.append("Image", Image,Image.name);
    formdata.append("Privacy", Privacy);
    Associate.map((res,index)=>{
      formdata.append(`name[${index}]`, res.name)
      formdata.append(`mail[${index}]`, res.mail)
    })
    formdata.append("Statement", Statement);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
  return fetch("https://studiomyraa.com/assoc/api/station", requestOptions)
 
      .then(result =>{ return result.json()})
      .catch(error => console.log('error', error));
      
        
       }
      }
