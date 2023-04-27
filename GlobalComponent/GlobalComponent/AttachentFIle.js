import React from 'react'
import AttachmentSharpIcon from "@mui/icons-material/AttachmentSharp";

const AttachentFile = () => {
  return (
    <div className="text-center text-lg-start lh-0">
    <div class="upload-btn-wrapper ">
      <button className="btn">
        <AttachmentSharpIcon />
      </button>
      <input
      className="w-100 h-100"
        type="file"
        name="myfile"
      />
    </div>
  </div>
  )
}

export default AttachentFile