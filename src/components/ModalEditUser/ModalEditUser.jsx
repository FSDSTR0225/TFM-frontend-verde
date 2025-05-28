import React from "react";
import "../ModalEditDelete/ModalEditDelete.css";
import {
  Button,
  Box,
  Modal,
  Fade,
  Typography,
  //   InputLabel,
  //   Select,
  //   MenuItem,
} from "@mui/material";
import { green, indigo } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function ModalEditUser({
  isShowModal,
  setIsShowModal,
  username,
  email,
  password,
  userId,
}) {
  const submitForm = async (data) => {
    setIsShowModal(false);
    console.log(data);
    await fetch(`http://localhost:4000/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resposnse) => resposnse.json())
      .then((res) => {
        console.log(res);
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
              <form
                onSubmit={handleSubmit(submitForm)}
                className="editModalBody"
              >
                <div className="editModal__itemwraper">
                  <span className="editModal__item">
                    <TextField
                      {...register("username", { required: true })}
                      className="editModal__item__input"
                      aria-invalid={errors.username ? "true" : "false"}
                      error={errors.username}
                      label="username"
                      defaultValue={username}
                      type="text"
                      helperText={
                        errors.username ? "Please enter valid username!" : null
                      }
                      variant="standard"
                    />
                  </span>
                  <span className="editModal__item">
                    <TextField
                      {...register("email", { required: true })}
                      className="editModal__item__input"
                      aria-invalid={errors.email ? "true" : "false"}
                      error={errors.email}
                      label="email"
                      defaultValue={email}
                      type="text"
                      helperText={
                        errors.email ? "Please enter valid email!" : null
                      }
                      variant="standard"
                    />
                  </span>
                  <span className="editModal__item">
                    <TextField
                      {...register("password", { required: true })}
                      className="editModal__item__input"
                      aria-invalid={errors.password ? "true" : "false"}
                      error={errors.password}
                      label="password"
                      defaultValue={password}
                      type="text"
                      helperText={
                        errors.password ? "Please enter valid password!" : null
                      }
                      variant="standard"
                    />
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
