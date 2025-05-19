import React from "react";
import "./ModalEditDelete.css";
import {
  Button,
  Box,
  Modal,
  Fade,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { green, indigo } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function ModalEditDelete({
  isShowModal,
  setIsShowModal,
  currentProperty,
  getUserProperties,
}) {
  const onSubmit = async (data) => {
    console.log(data);

    await fetch(`http://localhost:4000/properties/${currentProperty._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resposnse) => {
        if (!resposnse.status === 201) {
          console.log("error, response is :", resposnse);
        }
        getUserProperties();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const style = {
    border: `2px solid ${green["600"]}`,
  };
  return (
    <div>
      <Modal
        className="modal"
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-hidden="false"
      >
        <Fade in={isShowModal} appear="true">
          <Box className="modal__Box" sx={style}>
            <Typography className="modal__Title" color={indigo["900"]}>
              Edit Modal
            </Typography>
            <Typography className="modal__text" color={indigo["900"]}>
              Please enter new values and click ok
            </Typography>
            <div className="editModal__formContainer">
              <form onSubmit={handleSubmit(onSubmit)} className="editModalBody">
                <div className="editModal__itemwraper">
                  <span className="editModal__item">
                    <TextField
                      {...register("title", { required: true })}
                      className="editModal__item__input"
                      aria-invalid={errors.title ? "true" : "false"}
                      error={errors.title}
                      // id="standard-error-helper-text"
                      label="title"
                      defaultValue={
                        currentProperty.title ? currentProperty.title : " "
                      }
                      type="text"
                      helperText={
                        errors.title ? "Please enter valid title!" : " "
                      }
                      // color=""
                      variant="standard"
                    />
                  </span>
                  <span className="editModal__item">
                    <TextField
                      {...register("desc", { required: true })}
                      className="editModal__item__input"
                      aria-invalid={errors.desc ? "true" : "false"}
                      error={errors.desc}
                      // id="standard-error-helper-text"
                      label="description"
                      defaultValue={
                        currentProperty.desc ? currentProperty.desc : " "
                      }
                      type="text"
                      helperText={
                        errors.desc ? "Please enter valid description!" : null
                      }
                      // color=""
                      variant="standard"
                    />
                  </span>
                </div>

                <div className="editModal__itemwraper">
                  <span className="editModal__item">
                    <TextField
                      {...register("location", { required: true })}
                      className="editModal__item__input"
                      aria-invalid={errors.location ? "true" : "false"}
                      error={errors.location}
                      // id="standard-error-helper-text"
                      label="location"
                      defaultValue={
                        currentProperty.location
                          ? currentProperty.location
                          : " "
                      }
                      type="text"
                      helperText={
                        errors.location ? "Please enter valid location!" : null
                      }
                      // color=""
                      variant="standard"
                    />
                  </span>
                  <span className="editModal__item">
                    <TextField
                      {...register("duration", { required: true })}
                      className="editModal__item__input"
                      aria-invalid={errors.duration ? "true" : "false"}
                      error={errors.duration}
                      // id="standard-error-helper-text"
                      label="duration"
                      defaultValue={
                        currentProperty.duration
                          ? currentProperty.duration
                          : " "
                      }
                      type="text"
                      helperText={
                        errors.duration ? "Please enter valid duration!" : null
                      }
                      // color=""
                      variant="standard"
                    />
                  </span>
                </div>

                <div className="editModal__itemwraper">
                  <span className="editModal__item">
                    <TextField
                      {...register("price", { required: true })}
                      className="editModal__item__input"
                      error={errors.price}
                      // id="standard-error-helper-text"
                      label="price"
                      defaultValue={currentProperty.price ?? " "}
                      type="text"
                      helperText={
                        errors.price ? "Please enter valid price!" : null
                      }
                      variant="standard"
                    />
                  </span>
                  <span className="editModal__item">
                    <InputLabel id="select-bathrooms">bathrooms</InputLabel>
                    <Select
                      {...register("bathrooms", {
                        required: true,
                      })}
                      labelId="select-bathrooms"
                      defaultValue={currentProperty.bathrooms ?? " "}
                      label="bathrooms"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="1">One</MenuItem>
                      <MenuItem value="2">Two</MenuItem>
                      <MenuItem value="3">Threa</MenuItem>
                    </Select>
                    <InputLabel id="select-duration">Duration</InputLabel>
                    <Select
                      {...register("duration", {
                        required: true,
                      })}
                      labelId="select-duration"
                      defaultValue={currentProperty.duration ?? ""}
                      label="duration"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="3 Months">3 Months</MenuItem>
                      <MenuItem value="6 Months">6 Months</MenuItem>
                      <MenuItem value="9 Months">9 Months</MenuItem>
                      <MenuItem value="12 Months">12 Months</MenuItem>
                    </Select>
                  </span>
                </div>

                <div className="editModal__itemwraper">
                  <span className="editModal__item">
                    <InputLabel id="select-couples">COUPLES</InputLabel>
                    <Select
                      {...register("couples", {
                        required: true,
                      })}
                      labelId="select-couples"
                      defaultValue={currentProperty.couples ?? ""}
                      label="couples"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="true">YES</MenuItem>
                      <MenuItem value="false">NO</MenuItem>
                    </Select>
                    <InputLabel id="select-pets">PETS</InputLabel>
                    <Select
                      {...register("pets", {
                        required: true,
                      })}
                      labelId="select-pets"
                      defaultValue={currentProperty.pets ?? ""}
                      label="pets"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="true">YES</MenuItem>
                      <MenuItem value="false">NO</MenuItem>
                    </Select>
                  </span>
                  <span className="editModal__item">
                    <InputLabel id="select-minors">Minors Allowed</InputLabel>
                    <Select
                      {...register("minors", {
                        required: true,
                      })}
                      labelId="select-minors"
                      defaultValue={currentProperty.minors ?? ""}
                      label="minors"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="true">YES</MenuItem>
                      <MenuItem value="false">NO</MenuItem>
                    </Select>
                    <InputLabel id="select-Bedrooms">Bedrooms</InputLabel>
                    <Select
                      {...register("bedrooms", {
                        required: true,
                      })}
                      labelId="select-Bedrooms"
                      defaultValue={currentProperty.bedrooms ?? ""}
                      label="Bedrooms"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="1">One</MenuItem>
                      <MenuItem value="2">Two</MenuItem>
                      <MenuItem value="3">Threa</MenuItem>
                      <MenuItem value="4">Four</MenuItem>
                    </Select>
                  </span>
                </div>

                <Typography className="modalFooter">
                  <Button
                    onClick={() => setIsShowModal(false)}
                    className="modalFooter__btn fail"
                    variant="contained"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setIsShowModal(false)}
                    className="modalFooter__btn"
                    variant="contained"
                    type="submit"
                  >
                    OK
                  </Button>
                </Typography>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
