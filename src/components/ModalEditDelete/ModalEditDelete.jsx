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
  FormControl,
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
                <div className="editModal__mainWraper">
                  <TextField
                    {...register("title", { required: true })}
                    className="editModal__item__input"
                    aria-invalid={errors.title ? "true" : "false"}
                    error={errors.title}
                    label="title"
                    defaultValue={currentProperty.title ?? " "}
                    type="text"
                    helperText={
                      errors.title ? "Please enter valid title!" : " "
                    }
                    variant="standard"
                  />

                  <TextField
                    {...register("price", { required: true })}
                    className="editModal__item__input"
                    error={errors.price}
                    label="price"
                    defaultValue={currentProperty.price ?? " "}
                    type="text"
                    helperText={
                      errors.price ? "Please enter valid price!" : null
                    }
                    variant="standard"
                  />

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-city">City</InputLabel>
                    <Select
                      {...register("city", {
                        required: true,
                      })}
                      labelId="select-city"
                      className="editModal__item__input"
                      id="demo-simple-select"
                      defaultValue={currentProperty.city ?? " "}
                      label="city"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="Madrid">Madrid</MenuItem>
                      <MenuItem value="Barcelona">Barcelona</MenuItem>
                      <MenuItem value="Valencia">Valencia</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    {...register("location", { required: true })}
                    className="editModal__item__input"
                    aria-invalid={errors.location ? "true" : "false"}
                    error={errors.location}
                    label="location"
                    defaultValue={currentProperty.location ?? " "}
                    type="text"
                    helperText={
                      errors.location ? "Please enter valid location!" : null
                    }
                    variant="standard"
                  />

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-contractCategory">
                      contractCategory
                    </InputLabel>
                    <Select
                      {...register("contractCategory", {
                        required: true,
                      })}
                      labelId="select-city"
                      className="editModal__item__input"
                      id="demo-simple-select"
                      defaultValue={
                        currentProperty.contractCategory.name ?? " "
                      }
                      label="contractCategory"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="BUY">BUY</MenuItem>
                      <MenuItem value="RENT">RENT</MenuItem>
                      <MenuItem value="SHARE">SHARE</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-bathrooms">bathrooms</InputLabel>
                    <Select
                      {...register("bathrooms", {
                        required: true,
                      })}
                      labelId="select-bathrooms"
                      defaultValue={currentProperty.bathrooms ?? " "}
                      label="bathrooms"
                      className="editModal__item__input"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="1">One</MenuItem>
                      <MenuItem value="2">Two</MenuItem>
                      <MenuItem value="3">Threa</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-typeCategory">
                      typeCategory
                    </InputLabel>
                    <Select
                      {...register("typeCategory", {
                        required: true,
                      })}
                      labelId="select-typeCategory"
                      defaultValue={currentProperty.typeCategory.name ?? " "}
                      label="typeCategory"
                      className="editModal__item__input"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="Apartment">Apartment</MenuItem>
                      <MenuItem value="Villa">Villa</MenuItem>
                      <MenuItem value="Flat">Flat</MenuItem>
                      <MenuItem value="Room">Room</MenuItem>
                      <MenuItem value="Office">Office</MenuItem>
                      <MenuItem value="Garage">Garage</MenuItem>
                      <MenuItem value="Storage">Storage</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-Bedrooms">Bedrooms</InputLabel>
                    <Select
                      {...register("bedrooms", {
                        required: true,
                      })}
                      labelId="select-Bedrooms"
                      className="editModal__item__input"
                      defaultValue={currentProperty.bedrooms ?? " "}
                      label="Bedrooms"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="1">One</MenuItem>
                      <MenuItem value="2">Two</MenuItem>
                      <MenuItem value="3">Threa</MenuItem>
                      <MenuItem value="4">Four</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-pets">PETS</InputLabel>
                    <Select
                      {...register("pets", {
                        required: true,
                      })}
                      labelId="select-pets"
                      className="editModal__item__input"
                      defaultValue={currentProperty.pets ?? " "}
                      label="pets"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="true">YES</MenuItem>
                      <MenuItem value="false">NO</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-couples">COUPLES</InputLabel>
                    <Select
                      {...register("couples", {
                        required: true,
                      })}
                      labelId="select-couples"
                      className="editModal__item__input"
                      defaultValue={currentProperty.couples ?? " "}
                      label="couples"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="true">YES</MenuItem>
                      <MenuItem value="false">NO</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    multiline
                    rows={6}
                    type="text"
                    {...register("desc", { required: true, minLength: 10 })}
                    className="editModal__item__input descInput"
                    aria-invalid={errors.desc ? "true" : "false"}
                    error={errors.desc}
                    label="description"
                    defaultValue={currentProperty.desc ?? " "}
                    helperText={
                      errors.desc ? "Please enter valid description!" : null
                    }
                    variant="standard"
                  />

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-minors">Minors Allowed</InputLabel>
                    <Select
                      {...register("minors", {
                        required: true,
                      })}
                      labelId="select-minors"
                      className="editModal__item__input"
                      defaultValue={currentProperty.minors ?? " "}
                      label="minors"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="true">YES</MenuItem>
                      <MenuItem value="false">NO</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-duration">Duration</InputLabel>
                    <Select
                      {...register("duration", {
                        required: true,
                      })}
                      labelId="select-duration"
                      className="editModal__item__input"
                      defaultValue={currentProperty.duration ?? " "}
                      label="duration"
                      onChange={() => console.log("hi")}
                    >
                      <MenuItem value="3 Months">3 Months</MenuItem>
                      <MenuItem value="6 Months">6 Months</MenuItem>
                      <MenuItem value="9 Months">9 Months</MenuItem>
                      <MenuItem value="12 Months">12 Months</MenuItem>
                      <MenuItem value="forever">forever</MenuItem>
                    </Select>
                  </FormControl>
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
