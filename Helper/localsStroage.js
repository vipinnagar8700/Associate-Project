

export const  setlocalstore=(key,value)=>{
    
localStorage.setItem(key,JSON.stringify(value))
}
export const  getlocalstore=(key)=>{
    return JSON.parse(localStorage.getItem(key))
}
export const deletestore=(key)=>{
 localStorage.removeItem(key)
   return alert("iten are removed")
}