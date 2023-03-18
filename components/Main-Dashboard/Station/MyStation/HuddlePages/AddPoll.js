import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { TextareaAutosize } from '@mui/base';
import { Box } from "@mui/system";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


const AddPoll = ({ setCurrentStation }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div className="mb-3 bg-white">
      <div className="huddle_add_head">
        <div></div>
        <div>Add Poll</div>
        <div
          className="cr"
          onClick={() => {
            setCurrentStation(false);
          }}
        >
          X
        </div>
      </div>
      <Box className="my-3 text-center px-3">
       <Box> <TextareaAutosize minRows={2} className="form-control my-1 grey fs-13">What would you like to ask?</TextareaAutosize></Box>
       <Box className="mt-1">
       <Button variant="contained" className="w-75 border b-blue fs-15 lblue mt-1">
      Add Choice
      </Button>
       </Box>
      
      <Button variant="contained" className="btn btn-primary mt-3">
            Submit
      </Button>
      </Box>
    </div>
  );
};

export default AddPoll;
