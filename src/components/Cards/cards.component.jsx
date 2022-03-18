import React from "react";
import "./cards.styles.css";
import PictureIcon from "../../images/image-icon.svg";
import CameraIcon from "../../images/camera-icon.svg";
import TypeIcon from "../../images/type-icon.svg";
import UpdatePicture from "../UpdatePicture/drop-zone.component";
import { useNavigate  } from "react-router-dom";


function Cards(props) {
  let navigate = useNavigate();

  return (
    <div className="card-section">
      <div className="upload-box card-wrapper" onClick={()=> navigate("/upload")}>
        <img alt="upload icon" src={PictureIcon} />
        <p>Upload Your Picture</p>
      </div>
      <div className="camera-box card-wrapper">
        <img alt="camera icon" src={CameraIcon} />
        <p>Take a Picture</p>
      </div>
      <div className="type-box card-wrapper">
        <img alt="type icon" src={TypeIcon} />
        <p>Type Your Equation</p>
      </div>
    </div>
  );
}

export default Cards;
