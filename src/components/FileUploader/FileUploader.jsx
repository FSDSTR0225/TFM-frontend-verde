import "./FileUploader.css";
import { InputLabel,Button } from "@mui/material";
import { useRef } from "react";

const CLOUDINARY_ROOT_URL = "https://api.cloudinary.com/v1_1/";
const CLOUDINARY_CLOUD_NAME = "dvblykeav";
const CLOUDINARY_UPLOAD_PRESET = "casa_verde";

export const FileUploader = ({ setUploadedFile, setIsDisactive }) => {
  const fileInputRef = useRef(null);

  const onChangeFotoHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      fotoUploadHandler(file);
    }
  };

  const fotoUploadHandler = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `${CLOUDINARY_ROOT_URL}${CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setUploadedFile(data.url);
    setIsDisactive(true);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="FileUploader">

      <Button type="button" className="fakeUploadBtn" onClick={handleClick}>
        Choose Image
      </Button>

      <input
        ref={fileInputRef}
        type="file"
        id="imgUpload"
        name="file"
        style={{ display: "none" }}
        onChange={onChangeFotoHandler}
      />
    </div>
  );
};