
import {React, useContext }from 'react'
import Form from 'react-bootstrap/Form';


import {Stationform } from '../../../../Context/Stationform'

const OptionalLogo = () => {
  const {formvalue , setformvalue} = useContext(Stationform);
  const { Image}=formvalue
  const handlefile=(e)=>{
   setformvalue({...formvalue,Image:e.target.files[0]})
   if(Image){
   console.log(formvalue);
   }
  }
 if(Image){
  alert(Image)
  console.log(formvalue);
 }
  return (
    <div >    
      <Form.Group controlId="formFileSm" className="mb-3 optionalLogo">
        <Form.Label className='text-dark my-auto'>Add station logo image</Form.Label>
        <Form.Control type="file" size="sm" name="avatar"onChange={handlefile}/>
      </Form.Group>
    </div>
  )
}

export default OptionalLogo