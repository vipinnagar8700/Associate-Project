
import axios from "axios";

export const addpage=(title,description)=>{
    let data={
        title:title,
        content:description

    }
    return axios.post('https://assoc.studiomyraa.com/api/add_pages', data).then((data)=>{
         return data.data
    })

}
export const getpage=()=>{
    return axios.get('https://assoc.studiomyraa.com/api/view_page')
    .then((data)=>{
        return data.data.data.data
    })
    .catch((e)=>{
        return e
    })
    
}
export const editpage=(id)=>{
    return axios.get(`https://studiomyraa.com/assoc/api/edit_page/${id}`).then((data)=>{
        return data.data.results

    })

}

export const deletepage=(id)=>{
  return axios.delete(`https://studiomyraa.com/assoc/api/delete_page/${id}`).then((data)=>{
   
    return data
  })
}
