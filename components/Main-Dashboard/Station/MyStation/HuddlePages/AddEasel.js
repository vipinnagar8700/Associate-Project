import React from "react";
import JoditEditor from "jodit-react";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";

const AddEasel = ({ SetAddEasel }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div className="mb-3 bg-white">
      <div className="huddle_add_head">
        <div></div>
        <div>Add Easel</div>
        <div
          className="cr"
          onClick={() => {
            SetAddEasel(false);
          }}
        >
          X
        </div>
      </div>
      <div className="my-2 px-3">
        <input type="text" placeholder="Enter Title" className="form-control"/>
      </div>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
      <div className="d-flex justify-content-center my-3 px-2">
        <div>
          <Button variant="contained" className="btn btn-primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEasel;
