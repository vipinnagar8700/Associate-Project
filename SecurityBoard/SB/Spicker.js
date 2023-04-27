import React,{useState} from 'react'
import { SketchPicker } from 'react-color'


const Spicker = ({setcolPic,setbaColor}) => {


  const [bg,setbg] = useState('#fff')
  
  const handleComplete = (color) => {
    setbg (color.hex)
    setcolPic(color.hex)
    setbaColor((purani)=>{
     

    })
  }
  
  return (
    <SketchPicker    color={bg} onClick={() => { setbaColor(false); }}   onChange={handleComplete}/>
  )
}

export default Spicker