import "./FileUploader.css";
import { TextField, InputLabel } from "@mui/material";

const CLOUDINARY_ROOT_URL = "https://api.cloudinary.com/v1_1/";
const CLOUDINARY_CLOUD_NAME = "dvblykeav";
const CLOUDINARY_UPLOAD_PRESET = "casa_verde";

// const getImageInLowRes = (url) => {
//   return url.replace("upload", "upload/w_300,h_300,c_fill");
// };

export const FileUploader = ({
  setUploadedFile,
  setIsDisactive,
}) => {
  function onChangeFotoHandler(event) {
    const file = event.target.files[0];
    console.log("files", file);
    fotoUploadHandler(file);
  }
  async function fotoUploadHandler(file) {
    console.log("Uploading...");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      // https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload
      `${CLOUDINARY_ROOT_URL}${CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setUploadedFile(data.url);
    setIsDisactive(true);
  }

  return (
    <div className="FileUploader">
      <InputLabel htmlFor="imgUpload" className="imgUpload-label">
        Property Img
      </InputLabel>
      <TextField
        id="imgUpload"
        className="PropertyForm__input"
        type="file"
        name="file"
        defaultValue=""
        variant="standard"
        onChange={onChangeFotoHandler}
      />
    </div>
  );
};
