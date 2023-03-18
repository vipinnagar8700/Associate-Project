import React, { useState, useEffect, useRef } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CancelIcon from '@mui/icons-material/Cancel';
import CropFreeIcon from '@mui/icons-material/CropFree';
const Huddlecamera = ({setVideo,setHuddledata,Huddledata}) => {
  const [videoStream, setVideoStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef(null);

  const[videoblob,setvideoblob]=useState(null)
  console.log(videoblob,"rngu4tie");
console.log(setHuddledata);
 

  useEffect(() => {
    const constraints = {
      audio: true,
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        setVideoStream(stream);
      })
      .catch((error) => {
        console.log('Error accessing media devices.', error);
      });
  }, []);

  useEffect(() => {
    if (videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);

  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.ondataavailable = (event) => {
        setRecordedChunks((chunks) => [...chunks, event.data]);
        const blobAAA = new Blob([event.data], { type: 'video/mp4/webm' });
        setvideoblob(blobAAA)
      };

      mediaRecorder.onstop = (e) => {
   
   console.log( recordedChunks.length);
        
        const blob = new Blob(recordedChunks, { type: 'video/mp4/webm' });
        
       
    
       
       
        const url = URL.createObjectURL(blob);
        console.log(url,"dhieugfg");
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = url;
        a.download = 'recorded-video.mp4';
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      };
    }
  }, [mediaRecorder, recordedChunks]);

  const handleStartRecording = () => {
    const stream = videoRef.current.srcObject;
    const options = { mimeType: 'video/webm;codecs=vp9' };
    const mediaRecorder = new MediaRecorder(stream, options);
    setMediaRecorder(mediaRecorder);
    setRecording(true);
    mediaRecorder.start();
  };

  const handleStopRecording = () => {
    mediaRecorder.stop();
    setMediaRecorder(null);
    setRecording(false);
  };

  return (
    <div className='video-huddle'>     
      {videoStream && (
        <>
          <div className='video-screen' >
          <video autoPlay ref={videoRef}>
            Your browser does not support HTML5 video.
          </video>
          <div className='zoom-icon'>
                <CropFreeIcon/>
            </div>
         <div className='videos-icon pt-2'>
            <ul>
         {recording ? (
            <li onClick={handleStopRecording}><PauseCircleFilledIcon/></li>
          ) : (
            <li onClick={handleStartRecording}><PlayCircleIcon/></li>
          )}
          <li><CloudUploadIcon onClick={()=>setHuddledata({...Huddledata, VIDEO:videoblob})}/></li>
          <li><CancelIcon onClick={()=>{setVideo(false) }}/></li>
          </ul>
         </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Huddlecamera;
