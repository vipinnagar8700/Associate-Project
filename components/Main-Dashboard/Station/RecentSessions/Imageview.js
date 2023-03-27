import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, TextareaAutosize } from "@mui/material";
import Commentlist from "./Commentlist";
import AddIcon from "@mui/icons-material/Add";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Collapse from '@mui/material/Collapse';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  height: 500,
  borderRadius: 2,
};

export default function Imageview({ setOpen, open, Imageviewfile }) {
  const [viewcomment, setviewcomment] = useState(false);
  let filename = Imageviewfile.split(".");
  let newfile = filename[1];
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      position: {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
      text: currentComment,
    };
    setComments([...comments, newComment]);
    setCurrentComment("");
  };

  const handleCommentChange = (e) => {
    setCurrentComment(e.target.value);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000a3",
        }}
      >
        <Box sx={{ position: "relative", width: "70%", height: "90%" }}>
          <div>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "start",
                border: "2px solid red",
              }}
            >
              {newfile === "pdf" ? (
                <iframe
                  src={`https://assoc.studiomyraa.com/public/uploads/images/${Imageviewfile}`}
                  width="780"
                  height="400"
                />
              ) : (
                <>
                  {" "}
                  <img
                    src={`https://assoc.studiomyraa.com/public/uploads/images/${Imageviewfile}`}
                    alt="image"
                    style={{ width: "100%", height: "33em" }}
                    onClick={(e) => handleCommentSubmit(e)}
                  />
                </>
              )}
              <Box
                sx={{
                  position: "absolute",
                 
                  height: "100%",width:'40%'
                }}
              >
                 <AddIcon
                    onClick={()=>setviewcomment(true)}
                      sx={{
                        display:'inline',
                        position:'absolute', top:'2%',left:'4%',
                        color: "#fff",
                        backgroundColor: "#1688ca",
                        borderRadius: "50%",
                      }}
                    />
               
            {
          
              <Collapse in={viewcomment}  orientation="vertical"  style={{transitionTimingFunction:'linear' }}
             >
              <Box sx={{   backgroundColor: "#000000a3",height:'100%'
              
           }}>
            
                 <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                 <Box></Box>
                   
                    <Typography variant="span" sx={{ color: "#fff" }}>
                      {" "}
                      comment
                    </Typography>
                    <DangerousIcon
                    onClick={()=>setviewcomment(false)}
                      sx={{
                        color: "#fff",
                        borderRadius: "50%",
                        fontSize: "30px",
                      }}
                    />
                  </Box>  
                  <Box sx={{borderBottom:'1px solid #fff',marginBottom:'5px'}}></Box>
              <form onSubmit={handleCommentSubmit}  style={{display:'flex',justifyContent:'center',gap:"20px"}}>
                <label>
                
                  <input
                 style={{padding:"5px  10px",borderRadius:'10px'}}
                    type="text"
                    value={currentComment}
                    onChange={handleCommentChange}
                  />
                </label>
                <button type="submit" style={{ padding:"5px  10px",borderRadius:'10px'}}>
                  Add
                </button>
              </form>
              <Box sx={{borderBottom:'1px solid #fff',margin:'14px 30px',}}></Box>
              <Commentlist comments={comments} />
             
            </Box>
            </Collapse>
            }
              </Box>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
