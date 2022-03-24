import React, { useEffect, useRef} from "react";
import "./camera.styles.css";

function Camera() {
    const videoRef= useRef(null);

    useEffect(() => {
        getVideo();
      }, [videoRef]);
      
    const getVideo = () => {
        navigator.mediaDevices
          .getUserMedia({ video: { width: 300 } })
          .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
          })
          .catch(err => {
            console.error("error:", err);
          });
      };

  return (
    <>
      <button>Take a Picture</button>
      <video ref={videoRef}/>
      <canvas/>
    </>
  );
}

export default Camera;
