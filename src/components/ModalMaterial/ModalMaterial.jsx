import React from "react";
import "./ModalMaterial.css";
import { Button, Box, Modal, Fade, Typography, Backdrop } from "@mui/material";
import { green, red, indigo } from "@mui/material/colors";
import { PiSealCheckFill } from "react-icons/pi";
import { MdSmsFailed } from "react-icons/md";

export default function ModalMaterial({
  isShowModal,
  setIsShowModal,
  isModalSuccess,
  modalText,
}) {
  const greenstyle = {
    border: `2px solid ${green["600"]}`,
  };
  const redstyle = {
    border: `2px solid ${red["600"]}`,
  };

  return (
    <div>
      <Modal
        className="modal"
        open={isShowModal}
        onClose={() => setIsShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={isShowModal}>
          <Box
            className="modal__Box"
            sx={isModalSuccess ? greenstyle : redstyle}
          >
            {isModalSuccess ? (
              <PiSealCheckFill className="modal__successicon" />
            ) : (
              <MdSmsFailed className="modal__failicon" />
            )}
            <Typography className="modal__Title" color={indigo["900"]}>
              {isModalSuccess ? "Awesome!" : "Ooops.."}
            </Typography>
            <Typography className="modal__text" color={indigo["900"]}>
              {isModalSuccess ? modalText.success : modalText.fail}
            </Typography>
            <Typography
              className={isModalSuccess ? "modalFooter" : "modalFooter fail"}
            >
              <Button
                onClick={() => {
                  setIsShowModal(false);
                }}
                className={
                  isModalSuccess ? "modalFooter__btn" : "modalFooter__btn fail"
                }
                variant="contained"
              >
                {isModalSuccess ? "OK " : "OK try again"}
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
