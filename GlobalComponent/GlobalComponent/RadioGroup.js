import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function RadioGroup() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  

  return (
    <div>
      <Radio
        checked={selectedValue === 'a'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="a"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="b"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
      <Radio
        checked={selectedValue === 'c'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="c"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
      />
      <Radio
        checked={selectedValue === 'd'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="d"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
      />
      <Radio
        checked={selectedValue === 'e'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="e"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
      <Radio
        checked={selectedValue === 'f'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="f"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
      <Radio
        checked={selectedValue === 'g'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="g"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
      <Radio
        checked={selectedValue === 'h'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="h"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
      <Radio
        checked={selectedValue === 'i'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="i"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
      <Radio
        checked={selectedValue === 'j'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="j"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
      <Radio
        checked={selectedValue === 'k'}
        onChange={(event)=>{setSelectedValue(event.target.value)}}
        value="k"
        size='small'
        name="radio-buttons"
        sx={{padding:"0px 3px"}}
       
      />
    </div>
  );
}