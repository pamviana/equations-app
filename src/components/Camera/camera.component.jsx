import React, { useEffect, useRef, useState, useCallback } from "react";
import "./camera.styles.css";
import Webcam from "react-webcam";
import CameraButton from '../../images/camera-button.svg'

function Camera() {
    const [capturedImg, setCapturedImg] = useState(null);
    const videoConstraints = {
        
      };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    //console.log(imageSrc);
    setCapturedImg(imageSrc);
  }, [webcamRef]);
  
  return (
    <div className="camera-section">
      <Webcam width={"100%"} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>
      <img alt="camera button" src={CameraButton} onClick={capture} className="camera__button"/>
    </div>
  );
}

export default Camera;
