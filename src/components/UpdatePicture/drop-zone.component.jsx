import React from "react";
import "./drop-zone.styles.css";
import Dropzone from "react-dropzone";

function UpdatePicture() {
  async function onAcceptedDrop(acceptedFile) {
    console.log(acceptedFile[0]);
  }
  return (
    <div>
      <Dropzone
        minSize={1}
        maxSize={5000000}
        noKeyboard={true}
        accept="image/png, image/jpeg, image/pdf, image/tiff, image/webp"
        onDrop={(file) => {
          console.log(file);
        }}
        onDropAccepted={onAcceptedDrop}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              <p>Drag 'n' drop here, or click to select a file</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

export default UpdatePicture;
