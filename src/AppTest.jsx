import { useState } from "react";
import axios from "axios";

function FileUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      console.log(reader.result);
    });
    reader.readAsDataURL(file);
    
    const formData = new FormData();
    formData.append("file", file); // 'file' is the field name expected by your server

    try {
      const response = await axios.post(
        "http://localhost:4000/test",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("File uploaded successfully");
      console.log(response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUploader;
